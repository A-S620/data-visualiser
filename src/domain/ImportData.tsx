//A class that handles the imported data.
//Interfaces
import { IFile } from './interfaces/IFile';

//Other domain components
import { Notifications } from './Notifications';
import CSVProcessor from './CSVProcessor';
export class ImportData {
    private importedData: any;
    constructor(importedData: string) {
        this.importedData = importedData;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        const fileProcessor = new CSVProcessor(this.importedData);
        if (this.importedData.length === 0) {
            notifications.addNotification(`File is empty`);
        }
        console.log(fileProcessor.getCSVColumns());
        return notifications;
    }
}
