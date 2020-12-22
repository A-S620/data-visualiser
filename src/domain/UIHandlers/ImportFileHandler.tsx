import { Notifications } from './Notifications';
import { ImportFileData } from '../ImportedFileHandling/ImportFileData';
import { IImportedFile } from '../interfaces/IImportedFile';
import { AnalyseFileData } from '../ImportedFileHandling/AnalyseFileData';
import ResetImportedData from '../ReduxStoreHandling/ImportedData/ResetImportedData';
import ResetAnalysedData from '../ReduxStoreHandling/AnalysedData/ResetAnalysedData';

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
            const analysedDataErrors = ImportFileHandler.analyseData();
            notifications.concat(analysedDataErrors);
        }
        return notifications;
    }
    private getImportedDataErrors(): Notifications {
        const importData = new ImportFileData(this.importedFile);
        return importData.validate();
    }
    private static analyseData(): Notifications {
        const analyseData = new AnalyseFileData();
        return analyseData.validate();
    }
    public resetImportedFileData() {
        ImportFileHandler.resetImportedData();
        ImportFileHandler.resetAnalysedData();
    }
    private static resetImportedData() {
        const resetImportedData = new ResetImportedData();
        resetImportedData.resetImportedDataState();
    }
    private static resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
