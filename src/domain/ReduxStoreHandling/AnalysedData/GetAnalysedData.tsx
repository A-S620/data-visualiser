import { store } from '../../../ReduxStore/store';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';
export default class GetAnalysedData {
    private static getIntegerFields(): Array<string> {
        return store.getState().analysedData.integerFields;
    }

    private static getIntegerDataObjects(): Array<object> {
        return store.getState().analysedData.integerDataObjects;
    }
    public getAnalysedData(): IAnalysedFileData {
        return {
            integerFields: GetAnalysedData.getIntegerFields(),
            integerDataAsObjects: GetAnalysedData.getIntegerDataObjects(),
        };
    }
}
