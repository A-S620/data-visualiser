import { Notifications } from './Notifications';
import { ImportData } from '../ImportedFileHandling/ImportData';
import { IImportedFile } from '../interfaces/IImportedFile';
import { AnalyseData } from '../ImportedFileHandling/AnalyseData';

export class ImportFileHandler {
    private importedFile: IImportedFile;

    constructor(importedFile: IImportedFile) {
        this.importedFile = importedFile;
    }

    public validate(): Notifications {
        const notifications = new Notifications();
        const importedDataErrors = this.getImportedDataErrors();
        notifications.concat(importedDataErrors);
        if (notifications.isEmpty()) {
            const analysedDataErrors = this.analyseData();
            notifications.concat(analysedDataErrors);
        }
        return notifications;
    }
    private getImportedDataErrors(): Notifications {
        const importData = new ImportData(this.importedFile);
        return importData.validate();
    }
    private analyseData(): Notifications {
        const analyseData = new AnalyseData();
        const analyseDataErrors = analyseData.validate();
        return analyseDataErrors;
    }
}