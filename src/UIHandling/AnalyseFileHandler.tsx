import { NotificationsHandler } from './NotificationsHandler';
import { AnalyseIntervalData } from '../domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import ResetAnalysedData from '../domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

export class AnalyseFileHandler {
    private fields: any;
    constructor(fields: Array<object>) {
        this.fields = fields;
    }
    public validateAnalysedData(): NotificationsHandler {
        const analyseData = new AnalyseIntervalData(this.fields);
        return analyseData.validateIntervalData();
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
