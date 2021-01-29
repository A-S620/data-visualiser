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
                    dataArrays: action.payload,
                },
            };
        case ReducerActions.DATA_AS_OBJECTS_ADDED:
            return {
                ...state,
                importedData: {
                    ...state.importedData,
                    dataObjects: action.payload,
                },
            };

        case ReducerActions.IMPORTED_DATA_SLICE_RESET:
            return {
                importedData: {
                    dataFields: [],
                    dataObjects: [],
                    dataArrays: [],
                },
            };

        //analysedData slice
        case ReducerActions.FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    fields: action.payload,
                },
            };
        case ReducerActions.INTERVAL_FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    intervalFields: action.payload,
                },
            };
        case ReducerActions.INTERVAL_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    intervalDataObjects: action.payload,
                },
            };
        case ReducerActions.NOMINAL_FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    nominalFields: action.payload,
                },
            };
        case ReducerActions.NOMINAL_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    nominalDataObjects: action.payload,
                },
            };
        case ReducerActions.ANALYSED_DATA_SLICE_RESET:
            return {
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [],
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
