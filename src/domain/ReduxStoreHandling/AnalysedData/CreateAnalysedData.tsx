import { store } from '../../../ReduxStore/store';
import { addIntegerDataObjects, addIntegerFields } from '../../../ReduxStore/Actions/ReducerActions';

export default class CreateAnalysedData {
    private intervalFields: any;
    private intervalDataObjects: any;
    constructor(intervalFields: Array<string>, intervalDataObjects: Array<object>) {
        this.intervalFields = intervalFields;
        this.intervalDataObjects = intervalDataObjects;
    }
    //create intervalFields in store
    public createIntervalFields() {
        store.dispatch(addIntegerFields(this.intervalFields));
    }
    //create data as objects in store
    public createIntervalDataObjects() {
        store.dispatch(addIntegerDataObjects(this.intervalDataObjects));
    }
}
