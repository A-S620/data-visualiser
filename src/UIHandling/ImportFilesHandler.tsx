import { NotificationsHandler } from './NotificationsHandler';
import { ImportFileData } from '../domain/ImportedFile/ImportFileData';
import { IImportedFile } from '../interfaces/import/IImportedFile';
import { AnalyseIntervalData } from '../domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import ResetImportedData from '../domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import ResetAnalysedData from '../domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

export class ImportFilesHandler {
    private importedFile: IImportedFile;

    constructor(importedFile: IImportedFile) {
        this.importedFile = importedFile;
    }

    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const importedDataErrors = this.getImportedDataErrors();
        notifications.concat(importedDataErrors);
        if (notifications.isEmpty()) {
            const analysedDataErrors = ImportFilesHandler.analyseData();
            notifications.concat(analysedDataErrors);
        }
        return notifications;
    }
    private getImportedDataErrors(): NotificationsHandler {
        const importData = new ImportFileData(this.importedFile);
        return importData.validate();
    }
    private static analyseData(): NotificationsHandler {
        const analyseData = new AnalyseIntervalData();
        return analyseData.validateIntervalData();
    }
    public resetImportedData() {
        const resetImportedData = new ResetImportedData();
        resetImportedData.resetImportedDataState();
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
