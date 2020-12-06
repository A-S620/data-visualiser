//Imports from testStore
import ReduxState from '../ReduxState';
export default function importedDataReducer(state = ReduxState, action) {
    switch (action.type) {
        case 'dataFieldsAdded':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataFields: action.payload,
                },
            };
        case 'dataAsArraysAdded':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsArrays: action.payload,
                },
            };
        case 'dataAsObjectsAdded':
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsObjects: action.payload,
                },
            };

        case 'importedDataStateReset':
            return ReduxState;

        default:
            return state;
    }
}
