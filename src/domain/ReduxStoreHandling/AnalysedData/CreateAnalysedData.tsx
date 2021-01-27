import { store } from '../../../ReduxStore/store';
import { addFields, addIntervalDataObjects, addIntervalFields } from '../../../ReduxStore/Actions/ReducerActions';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';

export default class CreateAnalysedData {
    private analysedFileData: any;

    constructor(analysedFileData: IAnalysedFileData) {
        this.analysedFileData = analysedFileData;
    }
    public createIntervalFields() {
        store.dispatch(addIntervalFields(this.analysedFileData.intervalFields));
    }
    public createIntervalDataObjects() {
        store.dispatch(addIntervalDataObjects(this.analysedFileData.intervalDataAsObjects));
    }
    public createFields() {
        store.dispatch(addFields(this.analysedFileData.fields));
    }
}
