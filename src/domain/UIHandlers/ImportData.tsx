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
        const fileProcessor = new CSVProcessor(this.importedData);
        const columns: Array<string> = fileProcessor.getCSVColumns();
        const fileAsObjects: Array<object> = fileProcessor.CSVToObjects();
        const fileAsArray: Array<Array<any>> = fileProcessor.CSVToArrays();
        const storeHandler = new CreateStoreHandler(columns, fileAsObjects, fileAsArray);
        storeHandler.createColumns();
        storeHandler.createDataAsArrays();
        storeHandler.createDataAsObjects();
    }
    private processJSON() {
        const fileProcessor = new JSONProcessor(this.importedData);
        console.log(fileProcessor.getJSONFile());
        console.log(fileProcessor.getFields());
        console.log(fileProcessor.convertToCSV());
    }
}
