//Responsible for adding data to the importedData redux state.
//Imports from libraries
//Other domain components
import { Notifications } from '../../UIHandlers/Notifications';

//Store componenets
import Store from '../../../store/Store';
//Actions
import * as importedDataActions from '../../../store/Actions/ImportedDataActions';
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
        Store.dispatch({
            type: importedDataActions.DATA_FIELDS_ADDED,
            payload: this.dataFields,
        });
    }
    //create data as arrays in store
    public createDataAsArrays() {
        Store.dispatch({
            type: importedDataActions.DATA_AS_ARRAYS_ADDED,
            payload: this.dataAsArrays,
        });
    }
    //create data as objects in store
    public createDataAsObjects() {
        Store.dispatch({
            type: importedDataActions.DATA_AS_OBJECTS_ADDED,
            payload: this.dataAsObjects,
        });
    }
}
