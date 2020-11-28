// Responsible for getting data from the Redux store
//Store components
import { store } from '../store/store';
export default class GetStoreHandler {
    private readonly reduxStore = store.getState();
    public getColumns(): Array<any> {
        return store.getState().columns;
    }
    public getDataAsArrays(): Array<Array<any>> {
        return store.getState().dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        return store.getState().dataAsObjects;
    }
}
