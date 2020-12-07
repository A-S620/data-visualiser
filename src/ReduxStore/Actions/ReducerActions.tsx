//Stores the Redux Actions for the imported data state
//Action types
import * as importedDataActions from './ReducerActionTypes';

export const addDataFields = (dataFields: Array<string>) => ({
    type: importedDataActions.DATA_FIELDS_ADDED,
    payload: dataFields,
});
export const addDataAsArrays = (dataAsArrays: Array<Array<any>>) => ({
    type: importedDataActions.DATA_AS_ARRAYS_ADDED,
    payload: dataAsArrays,
});
export const addDataAsObjects = (dataAsObjects: Array<object>) => ({
    type: importedDataActions.DATA_AS_OBJECTS_ADDED,
    payload: dataAsObjects,
});
export const resetImportedData = () => ({
    type: importedDataActions.IMPORTED_DATA_STATE_RESET,
});
