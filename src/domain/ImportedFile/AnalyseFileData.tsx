import { NotificationsHandler } from '../../UIHandling/NotificationsHandler';
import { AnalyseIntervalData } from './DataAnalysis/AnalyseIntervalData';
import { FieldTypes, IAnalysedFileData } from '../../interfaces/import/IAnalysedFileData';
import CreateAnalysedData from '../ReduxStoreHandling/AnalysedData/CreateAnalysedData';

export class AnalyseFileData {
    private fields: Array<object>;
    private intervalfields: Array<string> = [];
    private intervalDataAsObjects: Array<object> = [];
    private nominalfields: Array<string> = [];
    private nominalDataAsObjects: Array<object> = [];
    constructor(fields: Array<object>) {
        this.fields = fields;
    }
    public validateAnalysedData(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        this.getIntervalFields();
        if (this.intervalfields.length > 0) {
            const analyseIntervalData = new AnalyseIntervalData(this.intervalfields);
            this.intervalDataAsObjects = analyseIntervalData.getAnalysedIntervalData().intervalDataAsObjects;
            notifications.concat(analyseIntervalData.validateIntervalData());
        }
        this.createAnalysedData();
        return notifications;
    }
    private getIntervalFields() {
        for (var objIndex = 0; objIndex < this.fields.length; objIndex += 1) {
            const field = this.fields[objIndex];
            const fieldValue = Object.values(field)[0];
            const fieldTypeValue = Object.values(field)[1];
            if (fieldTypeValue === FieldTypes.INTERVAL) {
                this.intervalfields.push(fieldValue);
            }
        }
    }

    private createAnalysedData() {
        const analysedData: IAnalysedFileData = {
            fields: this.fields,
            intervalFields: this.intervalfields,
            intervalDataObjects: this.intervalDataAsObjects,
            nominalFields: this.nominalfields,
            nominalDataObjects: this.nominalDataAsObjects,
        };
        const createAnalysedData = new CreateAnalysedData(analysedData);
        createAnalysedData.createFields();
        createAnalysedData.createIntervalFields();
        createAnalysedData.createIntervalDataObjects();
    }
}
