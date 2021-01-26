import { NotificationsHandler } from './NotificationsHandler';
import { ImportFileData } from '../domain/ImportedFile/ImportFileData';
import { IImportedFile } from '../interfaces/import/IImportedFile';
import ResetImportedData from '../domain/ReduxStoreHandling/ImportedData/ResetImportedData';

export class ImportFilesHandler {
    private importedFile: IImportedFile;

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
    public resetImportedData() {
        const resetImportedData = new ResetImportedData();
        resetImportedData.resetImportedDataState();
    }
}
