import { NotificationsHandler } from './NotificationsHandler';
import ResetAnalysedData from '../Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { AnalyseFileData } from '../Domain/AnalyseFile/AnalyseFileData';
import GetImportedData from '../Domain/ReduxStoreHandling/ImportedData/GetImportedData';

export class AnalyseFileHandler {
    private fields: any;
    constructor(fields: Array<object>) {
        this.fields = fields;
    }
    public validateAnalysedData(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const getImportedColumns = new GetImportedData().getImportedData().dataFields;
        if (this.fields.length !== getImportedColumns.length) {
            notifications.addNotification('Field types have not been selected for all fields');
            return notifications;
        } else {
            const analyseData = new AnalyseFileData(this.fields);
            notifications.concat(analyseData.validateAnalysedData());
            return notifications;
        }
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
