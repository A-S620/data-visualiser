import { reduxStore } from '../../../ReduxStore/reduxStore';
import {
    addBinaryDataObjects,
    addBinaryFields,
    addFields,
    addIgnoreDataObjects,
    addIgnoreFields,
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
        reduxStore.dispatch(addFields(this.analysedFileData.fields));
    }
    public createIntervalFields() {
        reduxStore.dispatch(addIntervalFields(this.analysedFileData.intervalFields));
    }
    public createIntervalDataObjects() {
        reduxStore.dispatch(addIntervalDataObjects(this.analysedFileData.intervalDataObjects));
    }
    public createNominalFields() {
        reduxStore.dispatch(addNominalFields(this.analysedFileData.nominalFields));
    }
    public createNominalDataObjects() {
        reduxStore.dispatch(addNominalDataObjects(this.analysedFileData.nominalDataObjects));
    }
    public createOrdinalFields() {
        reduxStore.dispatch(addOrdinalFields(this.analysedFileData.ordinalFields));
    }
    public createOrdinalDataObjects() {
        reduxStore.dispatch(addOrdinalDataObjects(this.analysedFileData.ordinalDataObjects));
    }
    public createBinaryFields() {
        reduxStore.dispatch(addBinaryFields(this.analysedFileData.binaryFields));
    }
    public createBinaryDataObjects() {
        reduxStore.dispatch(addBinaryDataObjects(this.analysedFileData.binaryDataObjects));
    }
    public createIgnoreFields() {
        reduxStore.dispatch(addIgnoreFields(this.analysedFileData.ignoreFields));
    }
    public createIgnoreDataObjects() {
        reduxStore.dispatch(addIgnoreDataObjects(this.analysedFileData.ignoreDataObjects));
    }
    public createAll() {
        this.createFields();
        this.createIntervalFields();
        this.createIntervalDataObjects();
        this.createNominalFields();
        this.createNominalDataObjects();
        this.createOrdinalFields();
        this.createOrdinalDataObjects();
        this.createBinaryFields();
        this.createBinaryDataObjects();
        this.createIgnoreFields();
        this.createIgnoreDataObjects();
    }
}
