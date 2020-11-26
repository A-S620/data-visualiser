// Responsible for getting data from the Redux store
//Store components
import { store } from '../store/store';
export default class GetStoreHandler {
    private readonly reduxStore = store.getState();
    public getColumns(): Array<any> {
        const { columns } = this.reduxStore;
        return columns;
    }
    public getDataAsArrays(): Array<Array<any>> {
        const { dataAsArrays } = this.reduxStore;
        return dataAsArrays;
    }
    public getDataAsObjects(): Array<object> {
        const { dataAsObjects } = this.reduxStore;
        return dataAsObjects;
    }
}
