import { NotificationsHandler } from './NotificationsHandler';
import { AnalyseIntervalData } from '../domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import ResetAnalysedData from '../domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

export class AnalyseFileHandler {
    public validateAnalysedData(): NotificationsHandler {
        const analyseData = new AnalyseIntervalData();
        return analyseData.validateIntervalData();
    }
    public resetAnalysedData() {
        const resetAnalysedData = new ResetAnalysedData();
        resetAnalysedData.resetAnalysedData();
    }
}
