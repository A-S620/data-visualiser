import { Notifications } from './Notifications';
import { ImportData } from '../ImportedFileHandling/ImportData';
import { IImportedFile } from '../interfaces/IImportedFile';

export class ImportFileHandler {
    private importedFile: IImportedFile;

    constructor(importedFile: IImportedFile) {
        this.importedFile = importedFile;
    }

    public handleImportedFile(): Notifications {
        const notifications = new Notifications();
        const importDataErrors = this.importData();
        if (importDataErrors.isEmpty()) {
        }
        return notifications;
    }
    private importData(): Notifications {
        const { fileType, file } = this.importedFile;
        const importData = new ImportData(file, fileType);
        const importDataErrors = importData.validate();
        return importDataErrors;
    }
}
