//A class that handles the imported data.
//Interfaces
import { IFile } from './interfaces/IFile';
import { IImportedFiles } from './interfaces/IImportedFiles';

//Other domain components
import { Notifications } from './Notifications';
export class ImportData {
    private importedData: any;
    constructor(importedData: any) {
        this.importedData = importedData;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        for (var i = 0; i < this.importedData.length; i++) {
            if (this.importedData[i].length === 0) {
                notifications.addNotification(`File ${this.importedData[i].name} is empty`);
            }
        }
        return notifications;
    }
}
