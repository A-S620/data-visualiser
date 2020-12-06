//Stores the Redux Actions for the imported data state
//Action types
import * as importedDataActions from './ImportedDataActionTypes';

export function addDataFields(dataFields: Array<string>) {
    return {
        type: importedDataActions.DATA_FIELDS_ADDED,
        payload: dataFields,
    };
}
export function addDataAsArrays(dataAsArrays: Array<Array<any>>) {
    return {
        type: importedDataActions.DATA_AS_ARRAYS_ADDED,
        payload: dataAsArrays,
    };
}
export function addDataAsObjects(dataAsObjects: Array<object>) {
    return {
        type: importedDataActions.DATA_AS_OBJECTS_ADDED,
        payload: dataAsObjects,
    };
}
export function resetImportedData() {
    return {
        type: importedDataActions.IMPORTED_DATA_STATE_RESET,
    };
}
