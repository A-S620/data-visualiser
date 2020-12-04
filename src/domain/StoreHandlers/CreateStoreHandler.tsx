//Responsible for adding data to the redux store.
//Imports from libraries
//Other domain components
import { Notifications } from '../UIHandlers/Notifications';

//Store componenets
import { store } from '../../store/store';
export default class CreateStoreHandler {
    private dataFields: any;
    private dataAsObjects: any;
    private dataAsArrays: any;
    constructor(dataFields: Array<string>, dataAsObjects: Array<object>, dataAsArrays: Array<Array<any>>) {
        this.dataFields = dataFields;
        this.dataAsObjects = dataAsObjects;
        this.dataAsArrays = dataAsArrays;
    }
    //create dataFields in store
    public createDataFields() {
        for (var i = 0; i < this.dataFields.length; i += 1) {
            store.dispatch({
                type: 'ADD_DATA_FIELDS',
                payload: this.dataFields[i],
            });
        }
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
