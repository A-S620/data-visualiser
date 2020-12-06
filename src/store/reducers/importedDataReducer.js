//Imports from testStore
import ReduxState from '../ReduxState';
export default function importedDataReducer(state = ReduxState, action) {
    switch (action.type) {
        case 'ADD_DATA_AS_ARRAYS':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsArrays: action.payload,
                },
            };
        case 'ADD_DATA_AS_OBJECTS':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsObjects: action.payload,
                },
            };
        case 'ADD_DATA_FIELDS':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataFields: action.payload,
                },
            };
        case 'RESET_IMPORTED_DATA_STATE':
            return ReduxState;

        default:
            return state;
    }
}
