// Responsible for getting data from the Redux store
//Interfaces
//Store components
import { store } from '../../store/store';
export default class GetStoreHandler {
    private readonly reduxStore = store.getState();
    public getColumns(): Array<string> {
        return store.getState().columns;
    }
    public getDataAsArrays(): Array<Array<any>> {
        return store.getState().dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        return store.getState().dataAsObjects;
    }
}
