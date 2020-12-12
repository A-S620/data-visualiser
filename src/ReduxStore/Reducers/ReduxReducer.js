//Imports from store
import ReduxState from '../ReduxState';
//Actions
import * as ReducerActions from '../Actions/ReducerActionTypes';
export default function reduxReducer(state = ReduxState, action) {
    switch (action.type) {
        //importedData slice
        case ReducerActions.DATA_FIELDS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataFields: action.payload,
                },
            };
        case ReducerActions.DATA_AS_ARRAYS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsArrays: action.payload,
                },
            };
        case ReducerActions.DATA_AS_OBJECTS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataAsObjects: action.payload,
                },
            };

        case ReducerActions.IMPORTED_DATA_SLICE_RESET:
            return {
                importedData: {
                    dataFields: [],
                    dataAsObjects: [],
                    dataAsArrays: [],
                },
            };

        //analysedData slice
        case ReducerActions.INTEGER_FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    integerFields: action.payload,
                },
            };
        case ReducerActions.INTEGER_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    integerDataObjects: action.payload,
                },
            };
        case ReducerActions.ANALYSED_DATA_SLICE_RESET:
            return {
                analysedData: {
                    integerFields: [],
                    integerDataObjects: [],
                },
            };
        default:
            return state;
    }
}
