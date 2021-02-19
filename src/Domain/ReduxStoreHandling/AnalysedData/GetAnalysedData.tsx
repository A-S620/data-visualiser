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
    private static getBinaryFields(): Array<string> {
        return store.getState().analysedData.binaryFields;
    }
    private static getBinaryDataObjects(): Array<object> {
        return store.getState().analysedData.binaryDataObjects;
    }
    private static getIgnoreFields(): Array<string> {
        return store.getState().analysedData.ignoreFields;
    }
    private static getIgnoreDataObjects(): Array<object> {
        return store.getState().analysedData.ignoreDataObjects;
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
            binaryFields: GetAnalysedData.getBinaryFields(),
            binaryDataObjects: GetAnalysedData.getBinaryDataObjects(),
            ignoreFields: GetAnalysedData.getIgnoreFields(),
            ignoreDataObjects: GetAnalysedData.getIgnoreDataObjects(),
        };
    }
}
