//Responsible for adding data to the importedData redux state.

import { Notifications } from '../../UIHandlers/Notifications';

import { store } from '../../../ReduxStore/store';
import { addDataFields, addDataAsArrays, addDataAsObjects } from '../../../ReduxStore/Actions/ReducerActions';

export default class CreateImportedData {
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
        store.dispatch(addDataFields(this.dataFields));
    }
    //create data as arrays in store
    public createDataAsArrays() {
        store.dispatch(addDataAsArrays(this.dataAsArrays));
    }
    //create data as objects in store
    public createDataAsObjects() {
        store.dispatch(addDataAsObjects(this.dataAsObjects));
    }
}
