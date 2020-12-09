//Responsible for taking the imported data from the imported data slice
//and amending it to create the analysed data slice in the ReduxStore

import Store from '../../../ReduxStore/Store';
import {
    addIntegerDataArrays,
    addIntegerDataObjects,
    addIntegerFields,
} from '../../../ReduxStore/Actions/ReducerActions';

export default class CreateAnalysedData {
    private integerFields: any;
    private integerDataObjects: any;
    private integerDataArrays: any;
    constructor(integerFields: Array<string>, integerDataObjects: Array<object>, integerDataArrays: Array<Array<any>>) {
        this.integerFields = integerFields;
        this.integerDataObjects = integerDataObjects;
        this.integerDataArrays = integerDataArrays;
    }
    //create integerFields in store
    public createIntegerFields() {
        Store.dispatch(addIntegerFields(this.integerFields));
    }
    //create data as arrays in store
    public createIntegerDataArrays() {
        Store.dispatch(addIntegerDataArrays(this.integerDataArrays));
    }
    //create data as objects in store
    public createIntegerDataObjects() {
        Store.dispatch(addIntegerDataObjects(this.integerDataObjects));
    }
}
