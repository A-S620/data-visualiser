import { NotificationsHandler } from './NotificationsHandler';
import ResetAnalysedData from '../Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { AnalyseFileData } from '../Domain/AnalyseFile/AnalyseFileData';
import ImportedData from '../Domain/ReduxStoreHandling/ImportedData/ImportedData';
import GetAnalysedData from '../Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

export class AnalyseFileHandler {
    public validateAnalysedData(fields: Array<object>): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const getImportedColumns = new ImportedData().get().dataFields;
        if (fields.length !== getImportedColumns.length) {
            notifications.addNotification('Field types have not been selected for all fields');
            return notifications;
        } else {
            const analyseData = new AnalyseFileData(fields);
            notifications.concat(analyseData.validateAnalysedData());
            return notifications;
        }
    }
    public getAnalysedDataFields(): Array<object> {
        return new GetAnalysedData().get().fields;
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
