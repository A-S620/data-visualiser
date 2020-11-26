//Responsible for adding data to the redux store.
//Imports from libraries
//Other domain components
import { Notifications } from './Notifications';

//Store componenets
import { store } from '../store/store';
export default class CreateStoreHandler {
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
        store.dispatch({
            type: 'ADD_COLUMNS',
            payload: this.columns,
        });
    }
    //create data as arrays in store
    public createDataAsArrays() {
        store.dispatch({
            type: 'ADD_DATA_AS_ARRAYS',
            payload: this.dataAsArrays,
        });
    }
    //create data as objects in store
    public createDataAsObjects() {
        store.dispatch({
            type: 'ADD_DATA_AS_OBJECTS',
            payload: this.dataAsObjects,
        });
    }
}
