//Imports from testStore
import importedDataState from '../importedDataState';
export default function importedDataReducer(state = importedDataState, action) {
    switch (action.type) {
        case 'ADD_DATA_AS_ARRAYS':
            return {
                ...state,
                dataAsArrays: [...state.dataAsArrays, action.payload],
            };
        case 'ADD_DATA_AS_OBJECTS':
            return {
                ...state,
                dataAsObjects: [...state.dataAsObjects, action.payload],
            };
        case 'ADD_DATA_FIELDS':
            return {
                ...state,
                dataFields: [...state.dataFields, action.payload],
            };
        case 'RESET_IMPORTED_DATA_STATE':
            return importedDataState;

        default:
            return state;
    }
}
