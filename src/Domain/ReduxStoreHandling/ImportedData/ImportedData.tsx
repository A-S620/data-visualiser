import { reduxStore } from '../../../ReduxStore/reduxStore';
import {
    addDataFields,
    addDataAsArrays,
    addDataAsObjects,
    resetImportedData,
} from '../../../ReduxStore/Actions/ReducerActions';
import { IImportedFileData } from '../../../Interfaces/import/IImportedFileData';

export default class ImportedData {
    public create(importedData: IImportedFileData) {
        reduxStore.dispatch(addDataFields(importedData.dataFields));
        reduxStore.dispatch(addDataAsArrays(importedData.dataArrays));
        reduxStore.dispatch(addDataAsObjects(importedData.dataObjects));
    }
    public get(): IImportedFileData {
        return {
            dataFields: reduxStore.getState().importedData.dataFields,
            dataObjects: reduxStore.getState().importedData.dataObjects,
            dataArrays: reduxStore.getState().importedData.dataArrays,
        };
    }
    public reset() {
        reduxStore.dispatch(resetImportedData());
    }
}
