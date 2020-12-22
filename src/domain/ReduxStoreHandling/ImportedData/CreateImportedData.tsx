//Responsible for adding data to the importedData redux state.

import { Notifications } from '../../UIHandlers/Notifications';

import { store } from '../../../ReduxStore/store';
import { addDataFields, addDataAsArrays, addDataAsObjects } from '../../../ReduxStore/Actions/ReducerActions';
import { IImportedFileData } from '../../interfaces/IImportedFileData';

export default class CreateImportedData {
    private importedData: IImportedFileData;
    constructor(importedData: IImportedFileData) {
        this.importedData = importedData;
    }
    //create dataFields in store
    public createDataFields() {
        store.dispatch(addDataFields(this.importedData.dataFields));
    }
    //create data as arrays in store
    public createDataAsArrays() {
        store.dispatch(addDataAsArrays(this.importedData.dataAsArrays));
    }
    //create data as objects in store
    public createDataAsObjects() {
        store.dispatch(addDataAsObjects(this.importedData.dataAsObjects));
    }
}
