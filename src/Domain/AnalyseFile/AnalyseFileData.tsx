import { NotificationsHandler } from '../../UIHandling/NotificationsHandler';
import { AnalyseIntervalData } from './DataAnalysis/AnalyseIntervalData';
import { FieldTypes, IAnalysedFileData } from '../../Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { AnalyseNominalData } from './DataAnalysis/AnalyseNominalData';

export class AnalyseFileData {
    private readonly fields: Array<object>;
    private intervalFields: Array<string> = [];
    private intervalDataObjects: Array<object> = [];
    private nominalFields: Array<string> = [];
    private nominalDataObjects: Array<object> = [];
    constructor(fields: Array<object>) {
        this.fields = fields;
    }
    public validateAnalysedData(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        this.getIntervalFields();
        this.getNominalFields();
        if (this.intervalFields.length > 0) {
            const analyseIntervalData = new AnalyseIntervalData(this.intervalFields);
            this.intervalDataObjects = analyseIntervalData.validateIntervalData();
        }
        if (this.nominalFields.length > 0) {
            const analyseNominalData = new AnalyseNominalData(this.nominalFields);
            this.nominalDataObjects = analyseNominalData.validateNominalData();
        }
        this.createAnalysedData();
        return notifications;
    }
    private getIntervalFields() {
        for (let objIndex = 0; objIndex < this.fields.length; objIndex += 1) {
            const field = this.fields[objIndex];
            const fieldValue = Object.values(field)[0];
            const fieldTypeValue = Object.values(field)[1];
            if (fieldTypeValue === FieldTypes.INTERVAL) {
                this.intervalFields.push(fieldValue);
            }
        }
    }
    private getNominalFields() {
        for (let objIndex = 0; objIndex < this.fields.length; objIndex += 1) {
            const field = this.fields[objIndex];
            const fieldValue = Object.values(field)[0];
            const fieldTypeValue = Object.values(field)[1];
            if (fieldTypeValue === FieldTypes.NOMINAL) {
                this.nominalFields.push(fieldValue);
            }
        }
    }

    private createAnalysedData() {
        const analysedData: IAnalysedFileData = {
            fields: this.fields,
            intervalFields: this.intervalFields,
            intervalDataObjects: this.intervalDataObjects,
            nominalFields: this.nominalFields,
            nominalDataObjects: this.nominalDataObjects,
        };
        const createAnalysedData = new CreateAnalysedData(analysedData);
        createAnalysedData.createFields();
        createAnalysedData.createIntervalFields();
        createAnalysedData.createIntervalDataObjects();
        createAnalysedData.createNominalFields();
        createAnalysedData.createNominalDataObjects();
    }
}
