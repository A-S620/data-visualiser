import { NotificationsHandler } from './NotificationsHandler';
import { AnalyseIntervalData } from '../domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import ResetAnalysedData from '../domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { AnalyseFileData } from '../domain/ImportedFile/AnalyseFileData';

export class AnalyseFileHandler {
    private fields: any;
    constructor(fields: Array<object>) {
        this.fields = fields;
    }
    public validateAnalysedData(): NotificationsHandler {
        const analyseData = new AnalyseFileData(this.fields);
        return analyseData.validateAnalysedData();
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
