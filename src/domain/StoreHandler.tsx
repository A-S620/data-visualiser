//Responsible for handling the redux Store
//Imports from libraries
//Other domain components
import { Notifications } from './Notifications';

//Store componenets
import { store } from '../store/store';
export default class StoreHandler {
    private columns: any;
    private dataAsObjects: any;
    private dataAsArrays: any;
    constructor(columns: Array<string>, dataAsObjects: Array<object>, dataAsArrays: Array<Array<any>>) {
        this.columns = columns;
        this.dataAsObjects = dataAsObjects;
        this.dataAsArrays = dataAsArrays;
    }

    //create columns in store
    public createColumns() {
        const notifications: Notifications = new Notifications();
        store.dispatch({
            type: 'ADD_COLUMNS',
            payload: this.columns,
        });
    }
    public getColumns(): Array<any> {
        const { columns } = store.getState();
        return columns;
    }
    //create data in store
}
