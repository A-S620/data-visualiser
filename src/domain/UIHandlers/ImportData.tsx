//A class that handles the imported data.
//Interfaces

//Other domain components
import { Notifications } from './Notifications';
import CSVProcessor from '../FileProcessors/CSVProcessor';
import CreateImportedDataState from '../ReduxStateHandlers/ImportedDataHandlers/CreateImportedDataState';
import JSONProcessor from '../FileProcessors/JSONProcessor';
//Interfaces
import { FileType, IFileType } from '../interfaces/IFileType';

export class ImportData {
    private importedData: any;
    private fileType: FileType;
    constructor(importedData: string, fileType: FileType) {
        this.importedData = importedData;
        this.fileType = fileType;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        if (this.importedData.length === 0) {
            notifications.addNotification(`File is empty`);
            return notifications;
        }
        if (this.fileType === FileType.JSON) {
            this.processJSON();
        }
        if (this.fileType === FileType.CSV) {
            this.processCSV();
        }

        return notifications;
    }
    private processCSV() {
        const csvProcessor = new CSVProcessor(this.importedData);
        const dataFields: Array<string> = csvProcessor.getCSVFields();
        const fileAsObjects: Array<object> = csvProcessor.csvToObjects();
        const fileAsArray: Array<Array<any>> = csvProcessor.csvToArrays();
        this.storeHandler(dataFields, fileAsObjects, fileAsArray);
    }
    private processJSON() {
        const jsonProcessor = new JSONProcessor(this.importedData);
        const dataFields: Array<string> = jsonProcessor.getJSONFields();
        const fileAsObjects: Array<object> = jsonProcessor.jsonToObjects();
        const fileAsArray: Array<Array<any>> = jsonProcessor.jsonToArrays();
        this.storeHandler(dataFields, fileAsObjects, fileAsArray);
    }
    private storeHandler(dataFields: Array<string>, fileAsObjects: Array<object>, fileAsArray: Array<Array<any>>) {
        const storeHandler = new CreateImportedDataState(dataFields, fileAsObjects, fileAsArray);
        storeHandler.createDataFields();
        storeHandler.createDataAsArrays();
        storeHandler.createDataAsObjects();
    }
}
