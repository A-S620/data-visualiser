//Imports from store
import ReduxState from '../ReduxState';
//Actions
import * as importedDataActions from '../Actions/ImportedDataActionTypes';
export default function importedDataReducer(state = ReduxState, action) {
    switch (action.type) {
        case importedDataActions.DATA_FIELDS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataFields: action.payload,
                },
            };
        case importedDataActions.DATA_AS_ARRAYS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsArrays: action.payload,
                },
            };
        case importedDataActions.DATA_AS_OBJECTS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsObjects: action.payload,
                },
            };

        case importedDataActions.IMPORTED_DATA_STATE_RESET:
            return ReduxState;

        default:
            return state;
    }
}
