//Responsible for adding data to the importedData redux state.
//Imports from libraries
//Other domain components
import { Notifications } from '../../UIHandlers/Notifications';

//Store componenets
import { store } from '../../../store/store';
export default class CreateImportedDataState {
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
        store.dispatch({
            type: 'ADD_DATA_FIELDS',
            payload: this.dataFields,
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
