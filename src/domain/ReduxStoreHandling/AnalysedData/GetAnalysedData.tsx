import { store } from '../../../ReduxStore/store';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';
export default class GetAnalysedData {
    private static getIntegerFields(): Array<string> {
        return store.getState().analysedData.intervalFields;
    }

    private static getIntegerDataObjects(): Array<object> {
        return store.getState().analysedData.intervalDataObjects;
    }
    private static getFields(): Array<object> {
        return store.getState().analysedData.fields;
    }
    public getAnalysedData(): IAnalysedFileData {
        return {
            fields: GetAnalysedData.getFields(),
            intervalFields: GetAnalysedData.getIntegerFields(),
            intervalDataAsObjects: GetAnalysedData.getIntegerDataObjects(),
        };
    }
}
