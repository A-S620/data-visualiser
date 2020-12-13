//Responsible for taking the imported data from the imported data slice
//and amending it to create the analysed data slice in the ReduxStore

import { store } from '../../../ReduxStore/store';
import { addIntegerDataObjects, addIntegerFields } from '../../../ReduxStore/Actions/ReducerActions';

export default class CreateAnalysedData {
    private integerFields: any;
    private integerDataObjects: any;
    constructor(integerFields: Array<string>, integerDataObjects: Array<object>) {
        this.integerFields = integerFields;
        this.integerDataObjects = integerDataObjects;
    }
    //create integerFields in store
    public createIntegerFields() {
        store.dispatch(addIntegerFields(this.integerFields));
    }
    //create data as objects in store
    public createIntegerDataObjects() {
        store.dispatch(addIntegerDataObjects(this.integerDataObjects));
    }
}
