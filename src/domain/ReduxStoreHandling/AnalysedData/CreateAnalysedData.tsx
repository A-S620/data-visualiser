import { store } from '../../../ReduxStore/store';
import {
    addFields,
    addIntervalDataObjects,
    addIntervalFields,
    addNominalDataObjects,
    addNominalFields,
} from '../../../ReduxStore/Actions/ReducerActions';
import { IAnalysedFileData } from '../../../interfaces/import/IAnalysedFileData';

export default class CreateAnalysedData {
    private analysedFileData: any;

    constructor(analysedFileData: IAnalysedFileData) {
        this.analysedFileData = analysedFileData;
    }
    public createFields() {
        store.dispatch(addFields(this.analysedFileData.fields));
    }
    public createIntervalFields() {
        store.dispatch(addIntervalFields(this.analysedFileData.intervalFields));
    }
    public createIntervalDataObjects() {
        store.dispatch(addIntervalDataObjects(this.analysedFileData.intervalDataObjects));
    }
    public createNominalFields() {
        store.dispatch(addNominalFields(this.analysedFileData.nominalFields));
    }
    public createNominalDataObjects() {
        store.dispatch(addNominalDataObjects(this.analysedFileData.nominalDataObjects));
    }
}
