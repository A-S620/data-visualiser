import { store } from '../../../ReduxStore/store';
import { addFields, addIntegerDataObjects, addIntegerFields } from '../../../ReduxStore/Actions/ReducerActions';
import { IFields } from '../../../interfaces/import/IFields';

export default class CreateAnalysedData {
    private fields: any;
    private intervalFields: any;
    private intervalDataObjects: any;
    constructor(fields: IFields, intervalFields: Array<string>, intervalDataObjects: Array<object>) {
        this.fields = fields;
        this.intervalFields = intervalFields;
        this.intervalDataObjects = intervalDataObjects;
    }
    public createIntervalFields() {
        store.dispatch(addIntegerFields(this.intervalFields));
    }
    public createIntervalDataObjects() {
        store.dispatch(addIntegerDataObjects(this.intervalDataObjects));
    }
    public createFields() {
        store.dispatch(addFields(this.fields));
    }
}
