import { store } from '../../../ReduxStore/store';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';
export default class GetAnalysedData {
    private static getIntegerFields(): Array<string> {
        return store.getState().analysedData.intervalFields;
    }

    private static getIntegerDataObjects(): Array<object> {
        return store.getState().analysedData.intervalDataObjects;
    }
    public getAnalysedData(): IAnalysedFileData {
        return {
            intervalFields: GetAnalysedData.getIntegerFields(),
            integerDataAsObjects: GetAnalysedData.getIntegerDataObjects(),
        };
    }
}
