//TODO: Test valid JSON + notification
//TODO: Test valid CSV +notification

import { Notifications } from '../UIHandlers/Notifications';
import CSVProcessor from './FileProcessors/CSVProcessor';
import CreateImportedData from '../ReduxStoreHandling/ImportedData/CreateImportedData';
import GetImportedData from '../ReduxStoreHandling/ImportedData/GetImportedData';
import JSONProcessor from './FileProcessors/JSONProcessor';

import { FileType } from '../interfaces/IFileType';
import { IImportedData } from '../interfaces/IImportedData';
import { IImportedFile } from '../interfaces/IImportedFile';

export class ImportData {
    private importedFile: IImportedFile;

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
        if (fileType === FileType.JSON) {
            this.processJSON();
        }
        if (fileType === FileType.CSV) {
            this.processCSV();
        }

        return notifications;
    }
    private processCSV() {
        const { file } = this.importedFile;
        const csvProcessor = new CSVProcessor(file);
        const importedData: IImportedData = {
            dataFields: csvProcessor.getCSVFields(),
            dataAsObjects: csvProcessor.csvToObjects(),
            dataAsArrays: csvProcessor.csvToArrays(),
        };
        ImportData.createImportedData(importedData);
    }
    private processJSON() {
        const jsonProcessor = new JSONProcessor(this.importedFile);
        const importedData: IImportedData = {
            dataFields: jsonProcessor.getJSONFields(),
            dataAsObjects: jsonProcessor.jsonToObjects(),
            dataAsArrays: jsonProcessor.jsonToArrays(),
        };
        ImportData.createImportedData(importedData);
    }
    private static createImportedData(importedData: IImportedData) {
        const createImportedData = new CreateImportedData(importedData);
        createImportedData.createDataFields();
        createImportedData.createDataAsArrays();
        createImportedData.createDataAsObjects();
    }
    public getImportedData(): IImportedData {
        const getImportedData = new GetImportedData();
        const data = getImportedData.getImportedData();
        return {
            dataFields: data.dataFields,
            dataAsObjects: data.dataAsObjects,
            dataAsArrays: data.dataAsArrays,
        };
    }
}
