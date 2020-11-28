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
        for (var i = 0; i < this.columns.length; i += 1) {
            store.dispatch({
                type: 'ADD_COLUMNS',
                payload: this.columns[i],
            });
        }
        console.log(store.getState().columns);
    }
    //create data as arrays in store
    public createDataAsArrays() {
        for (let i = 0; i < this.dataAsArrays.length; i += 1) {
            store.dispatch({
                type: 'ADD_DATA_AS_ARRAYS',
                payload: this.dataAsArrays[i],
            });
        }
    }
    //create data as objects in store
    public createDataAsObjects() {
        for (let i = 0; i < this.dataAsObjects.length; i += 1) {
            store.dispatch({
                type: 'ADD_DATA_AS_OBJECTS',
                payload: this.dataAsObjects[i],
            });
        }
    }
}
