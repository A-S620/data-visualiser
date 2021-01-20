import ReduxState from '../ReduxState';
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
                    intervalFields: action.payload,
                },
            };
        case ReducerActions.INTEGER_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    intervalDataObjects: action.payload,
                },
            };
        case ReducerActions.ANALYSED_DATA_SLICE_RESET:
            return {
                analysedData: {
                    intervalFields: [],
                    intervalDataObjects: [],
                },
            };

        //linePlotOptions slice
        case ReducerActions.LINE_OPTIONS_ADDED:
            return {
                ...state,
                linePlotOptions: action.payload,
            };
        case ReducerActions.LINE_OPTIONS_RESET:
            return {
                linePlotOptions: {},
            };
        //currentVisualisation slice
        case ReducerActions.CURRENT_VISUAL_ADDED:
            return {
                ...state,
                currentVisualisation: action.payload,
            };
        case ReducerActions.CURRENT_VISUAL_RESET:
            return {
                currentVisualisation: {},
            };
        default:
            return state;
    }
}
