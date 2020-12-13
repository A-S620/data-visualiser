// Responsible for getting data from the importedData Redux state
//Interfaces
//Store components
import { store } from '../../../ReduxStore/store';

export default class GetImportedData {
    public getDataFields(): Array<string> {
        return store.getState().importedData.dataFields;
    }
    public getDataAsArrays(): Array<Array<any>> {
        return store.getState().importedData.dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        return store.getState().importedData.dataAsObjects;
    }
}
