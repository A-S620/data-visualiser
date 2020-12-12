//Responsible for taking the imported data from the imported data slice
//and amending it to create the analysed data slice in the ReduxStore

import Store from '../../../ReduxStore/Store';
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
        Store.dispatch(addIntegerFields(this.integerFields));
    }
    //create data as objects in store
    public createIntegerDataObjects() {
        Store.dispatch(addIntegerDataObjects(this.integerDataObjects));
    }
}
