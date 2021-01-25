import { store } from '../../../ReduxStore/store';
import { addFields, addIntegerDataObjects, addIntegerFields } from '../../../ReduxStore/Actions/ReducerActions';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';

export default class CreateAnalysedData {
    private analysedFileData: any;

    constructor(analysedFileData: IAnalysedFileData) {
        this.analysedFileData = analysedFileData;
    }
    public createIntervalFields() {
        store.dispatch(addIntegerFields(this.analysedFileData.intervalFields));
    }
    public createIntervalDataObjects() {
        store.dispatch(addIntegerDataObjects(this.analysedFileData.intervalDataAsObjects));
    }
    public createFields() {
        store.dispatch(addFields(this.analysedFileData.fields));
    }
}
