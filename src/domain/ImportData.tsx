//A class that handles the imported data.
//Interfaces
import { IFile } from './interfaces/IFile';

//Other domain components
import { Notifications } from './Notifications';
import CSVProcessor from './CSVProcessor';
import CreateStoreHandler from './CreateStoreHandler';
import GetStoreHandler from './GetStoreHandler';
import { store } from '../store/store';
export class ImportData {
    private importedData: any;
    constructor(importedData: string) {
        this.importedData = importedData;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        if (this.importedData.length === 0) {
            notifications.addNotification(`File is empty`);
            return notifications;
        } else {
            const fileProcessor = new CSVProcessor(this.importedData);
            const columns: Array<string> = fileProcessor.getCSVColumns();
            const fileAsObjects: Array<object> = fileProcessor.CSVToObjects();
            const fileAsArray: Array<Array<any>> = fileProcessor.CSVToArrays();
            const storeHandler = new CreateStoreHandler(columns, fileAsObjects, fileAsArray);
            storeHandler.createColumns();
            storeHandler.createDataAsArrays();
            storeHandler.createDataAsObjects();
        }
        return notifications;
    }
}
