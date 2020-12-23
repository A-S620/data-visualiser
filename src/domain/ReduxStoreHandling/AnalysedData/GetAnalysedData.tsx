import { store } from '../../../ReduxStore/store';
export default class GetAnalysedData {
    public getIntegerFields(): Array<string> {
        return store.getState().analysedData.integerFields;
    }

    public getIntegerDataObjects(): Array<object> {
        return store.getState().analysedData.integerDataObjects;
    }
}
