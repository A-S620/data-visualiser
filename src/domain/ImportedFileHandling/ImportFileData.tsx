//TODO: Test valid CSV +notification

import { Notifications } from '../UIHandlers/Notifications';
import CSVProcessor from './FileProcessors/CSVProcessor';
import CreateImportedData from '../ReduxStoreHandling/ImportedData/CreateImportedData';
import GetImportedData from '../ReduxStoreHandling/ImportedData/GetImportedData';

import { IImportedFileData } from '../interfaces/IImportedFileData';
import { IImportedFile } from '../interfaces/IImportedFile';

export class ImportFileData {
    private readonly importedFile: IImportedFile;

    constructor(importedFile: IImportedFile) {
        this.importedFile = importedFile;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        const { fileType, file }: IImportedFile = this.importedFile;
        if (file.length === 0) {
            notifications.addNotification(`File is empty`);
            return notifications;
        }
        if (fileType !== 'text/csv') {
            notifications.addNotification(`File is ${fileType}, only CSV is accepted`);
            return notifications;
        } else {
            this.processCSV();
        }

        return notifications;
    }
    private processCSV() {
        const csvProcessor = new CSVProcessor(this.importedFile.file);
        const importedData: IImportedFileData = {
            dataFields: csvProcessor.getCSVFields(),
            dataAsObjects: csvProcessor.csvToObjects(),
            dataAsArrays: csvProcessor.csvToArrays(),
        };
        ImportFileData.createImportedData(importedData);
    }
    private static createImportedData(importedData: IImportedFileData) {
        const createImportedData = new CreateImportedData(importedData);
        createImportedData.createDataFields();
        createImportedData.createDataAsArrays();
        createImportedData.createDataAsObjects();
    }
    public getImportedData(): IImportedFileData {
        const getImportedData = new GetImportedData();
        const data = getImportedData.getImportedData();
        return {
            dataFields: data.dataFields,
            dataAsObjects: data.dataAsObjects,
            dataAsArrays: data.dataAsArrays,
        };
    }
}
