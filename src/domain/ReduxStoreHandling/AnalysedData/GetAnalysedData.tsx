//Responsible for getting the data stored in the AnalysedData slice in the Redux store
//Store componenets
import Store from '../../../ReduxStore/Store';
export default class GetAnalysedData {
    public getIntegerFields(): Array<string> {
        return Store.getState().analysedData.integerFields;
    }
    public getIntegerDataArrays(): Array<Array<any>> {
        return Store.getState().analysedData.integerDataArrays;
    }
    public getIntegerDataObjects(): Array<object> {
        return Store.getState().analysedData.integerDataObjects;
    }
}
