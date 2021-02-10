import { store } from '../../../ReduxStore/store';
import {
    addFields,
    addIntervalDataObjects,
    addIntervalFields,
    addNominalDataObjects,
    addNominalFields,
    addOrdinalDataObjects,
    addOrdinalFields,
} from '../../../ReduxStore/Actions/ReducerActions';
import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';

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
    public createOrdinalFields() {
        store.dispatch(addOrdinalFields(this.analysedFileData.ordinalFields));
    }
    public createOrdinalDataObjects() {
        store.dispatch(addOrdinalDataObjects(this.analysedFileData.ordinalDataObjects));
    }
    public createAll() {
        this.createFields();
        this.createIntervalFields();
        this.createIntervalDataObjects();
        this.createNominalFields();
        this.createNominalDataObjects();
        this.createOrdinalFields();
        this.createOrdinalDataObjects();
    }
}
