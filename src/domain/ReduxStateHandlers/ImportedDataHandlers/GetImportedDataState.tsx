// Responsible for getting data from the importedData Redux state
//Interfaces
//Store components
import Store from '../../../store/Store';
export default class GetImportedDataState {
    public getDataFields(): Array<string> {
        return Store.getState().importedData.dataFields;
    }
    public getDataAsArrays(): Array<Array<any>> {
        return Store.getState().importedData.dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        return Store.getState().importedData.dataAsObjects;
    }
}
