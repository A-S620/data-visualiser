import { store } from '../../../ReduxStore/store';
import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';
export default class GetAnalysedData {
    private static getFields(): Array<object> {
        return store.getState().analysedData.fields;
    }
    private static getIntegerFields(): Array<string> {
        return store.getState().analysedData.intervalFields;
    }

    private static getIntegerDataObjects(): Array<object> {
        return store.getState().analysedData.intervalDataObjects;
    }
    private static getNominalFields(): Array<string> {
        return store.getState().analysedData.nominalFields;
    }
    private static getNominalDataObjects(): Array<object> {
        return store.getState().analysedData.nominalDataObjects;
    }
    private static getOrdinalFields(): Array<string> {
        return store.getState().analysedData.ordinalFields;
    }
    private static getOrdinalDataObjects(): Array<object> {
        return store.getState().analysedData.ordinalDataObjects;
    }
    public getAnalysedData(): IAnalysedFileData {
        return {
            fields: GetAnalysedData.getFields(),
            intervalFields: GetAnalysedData.getIntegerFields(),
            intervalDataObjects: GetAnalysedData.getIntegerDataObjects(),
            nominalFields: GetAnalysedData.getNominalFields(),
            nominalDataObjects: GetAnalysedData.getNominalDataObjects(),
            ordinalFields: GetAnalysedData.getOrdinalFields(),
            ordinalDataObjects: GetAnalysedData.getOrdinalDataObjects(),
            binaryFields: [],
            binaryDataObjects: [],
        };
    }
}
