//Responsible for adding data to the importedData redux state.

import { Notifications } from '../../UIHandlers/Notifications';

import { store } from '../../../ReduxStore/store';
import { addDataFields, addDataAsArrays, addDataAsObjects } from '../../../ReduxStore/Actions/ReducerActions';
import { IImportedData } from '../../interfaces/IImportedData';

export default class CreateImportedData {
    private importedData: IImportedData;
    constructor(importedData: IImportedData) {
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
