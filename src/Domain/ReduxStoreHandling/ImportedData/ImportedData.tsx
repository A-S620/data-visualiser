import { store } from '../../../ReduxStore/store';
import {
    addDataFields,
    addDataAsArrays,
    addDataAsObjects,
    resetImportedData,
} from '../../../ReduxStore/Actions/ReducerActions';
import { IImportedFileData } from '../../../Interfaces/import/IImportedFileData';

export default class ImportedData {
    public create(importedData: IImportedFileData) {
        store.dispatch(addDataFields(importedData.dataFields));
        store.dispatch(addDataAsArrays(importedData.dataArrays));
        store.dispatch(addDataAsObjects(importedData.dataObjects));
    }
    public get(): IImportedFileData {
        return {
            dataFields: store.getState().importedData.dataFields,
            dataObjects: store.getState().importedData.dataObjects,
            dataArrays: store.getState().importedData.dataArrays,
        };
    }
    public reset() {
        store.dispatch(resetImportedData());
    }
}
