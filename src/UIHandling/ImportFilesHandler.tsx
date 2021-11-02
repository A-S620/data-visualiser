import { NotificationsHandler } from './NotificationsHandler';
import { ImportFileData } from '../Domain/ImportFile/ImportFileData';
import { IImportedFile } from '../Interfaces/import/IImportedFile';

export class ImportFilesHandler {
    private readonly importedFile: IImportedFile;

    constructor(importedFile: IImportedFile) {
        this.importedFile = importedFile;
    }

    public validate(): NotificationsHandler {
        if (this.importedFile.file.length === 0) {
            const notifications = new NotificationsHandler();
            notifications.addNotification('File is empty');
            return notifications;
        }
        return this.getImportedDataErrors();
    }

    private getImportedDataErrors(): NotificationsHandler {
        const importData = new ImportFileData(this.importedFile);
        return importData.validate();
    }
}
