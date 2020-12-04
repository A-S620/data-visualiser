// Responsible for getting data from the Redux store
//Interfaces
//Store components
import { store } from '../../store/store';
export default class GetStoreHandler {
    public getDataFields(): Array<string> {
        return store.getState().dataFields;
    }
    public getDataAsArrays(): Array<Array<any>> {
        return store.getState().dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        return store.getState().dataAsObjects;
    }
}
