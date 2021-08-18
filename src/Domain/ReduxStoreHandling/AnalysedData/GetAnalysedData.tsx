import { reduxStore } from '../../../ReduxStore/reduxStore';
import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';
export default class GetAnalysedData {
    private static getFields(): Array<object> {
        return reduxStore.getState().analysedData.fields;
    }
    private static getIntegerFields(): Array<string> {
        return reduxStore.getState().analysedData.intervalFields;
    }

    private static getIntegerDataObjects(): Array<object> {
        return reduxStore.getState().analysedData.intervalDataObjects;
    }
    private static getNominalFields(): Array<string> {
        return reduxStore.getState().analysedData.nominalFields;
    }
    private static getNominalDataObjects(): Array<object> {
        return reduxStore.getState().analysedData.nominalDataObjects;
    }
    private static getOrdinalFields(): Array<string> {
        return reduxStore.getState().analysedData.ordinalFields;
    }
    private static getOrdinalDataObjects(): Array<object> {
        return reduxStore.getState().analysedData.ordinalDataObjects;
    }
    private static getBinaryFields(): Array<string> {
        return reduxStore.getState().analysedData.binaryFields;
    }
    private static getBinaryDataObjects(): Array<object> {
        return reduxStore.getState().analysedData.binaryDataObjects;
    }
    private static getIgnoreFields(): Array<string> {
        return reduxStore.getState().analysedData.ignoreFields;
    }
    private static getIgnoreDataObjects(): Array<object> {
        return reduxStore.getState().analysedData.ignoreDataObjects;
    }
    public get(): IAnalysedFileData {
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
