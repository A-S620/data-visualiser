import { store } from '../../../ReduxStore/store';
import { addDataFields, addDataAsArrays, addDataAsObjects } from '../../../ReduxStore/Actions/ReducerActions';
import { IImportedFileData } from '../../interfaces/IImportedFileData';

export default class CreateImportedData {
    private importedData: IImportedFileData;
    constructor(importedData: IImportedFileData) {
        this.importedData = importedData;
    }
    public createDataFields() {
        store.dispatch(addDataFields(this.importedData.dataFields));
    }
    public createDataAsArrays() {
        store.dispatch(addDataAsArrays(this.importedData.dataAsArrays));
    }
    public createDataAsObjects() {
        store.dispatch(addDataAsObjects(this.importedData.dataAsObjects));
    }
}
