//A class that handles the imported data.
//Interfaces

//Other domain components
import { Notifications } from './Notifications';
import CSVProcessor from '../FileProcessors/CSVProcessor';
import CreateStoreHandler from '../StoreHandlers/CreateStoreHandler';
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
        const columns: Array<string> = csvProcessor.getCSVFields();
        const fileAsObjects: Array<object> = csvProcessor.csvToObjects();
        const fileAsArray: Array<Array<any>> = csvProcessor.csvToArrays();
        this.storeHandler(columns, fileAsObjects, fileAsArray);
    }
    private processJSON() {
        const jsonProcessor = new JSONProcessor(this.importedData);
        const columns: Array<string> = jsonProcessor.getJSONFields();
        const fileAsObjects: Array<object> = jsonProcessor.jsonToObjects();
        const fileAsArray: Array<Array<any>> = jsonProcessor.jsonToArrays();
        this.storeHandler(columns, fileAsObjects, fileAsArray);
    }
    private storeHandler(columns: Array<string>, fileAsObjects: Array<object>, fileAsArray: Array<Array<any>>) {
        const storeHandler = new CreateStoreHandler(columns, fileAsObjects, fileAsArray);
        storeHandler.createColumns();
        storeHandler.createDataAsArrays();
        storeHandler.createDataAsObjects();
    }
}
