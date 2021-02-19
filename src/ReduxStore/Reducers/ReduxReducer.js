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
        case ReducerActions.ORDINAL_FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    ordinalFields: action.payload,
                },
            };
        case ReducerActions.ORDINAL_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    ordinalDataObjects: action.payload,
                },
            };
        case ReducerActions.BINARY_FIELDS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    binaryFields: action.payload,
                },
            };
        case ReducerActions.BINARY_DATA_OBJECTS_ADDED:
            return {
                ...state,
                analysedData: {
                    ...state.analysedData,
                    binaryDataObjects: action.payload,
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
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            };

        //lineSeriesOptions slice
        case ReducerActions.LINE_OPTIONS_ADDED:
            return {
                ...state,
                lineSeriesOptions: action.payload,
            };
        case ReducerActions.LINE_OPTIONS_RESET:
            return {
                lineSeriesOptions: {},
            };
        //barSeriesOptions slice
        case ReducerActions.BAR_OPTIONS_ADDED:
            return {
                ...state,
                barSeriesOptions: action.payload,
            };
        case ReducerActions.BAR_OPTIONS_RESET:
            return {
                barSeriesOptions: {},
            };
        //markSeriesOptions slice
        case ReducerActions.MARK_OPTIONS_ADDED:
            return {
                ...state,
                markSeriesOptions: action.payload,
            };
        case ReducerActions.MARK_OPTIONS_RESET:
            return {
                markSeriesOptions: {},
            };

        //currentLineVisualisation slice
        case ReducerActions.CURRENT_LINE_VISUAL_ADDED:
            return {
                ...state,
                currentLineVisualisation: action.payload,
            };
        case ReducerActions.CURRENT_LINE_VISUAL_RESET:
            return {
                currentLineVisualisation: {},
            };
        //currentBarVisualisation slice
        case ReducerActions.CURRENT_BAR_VISUAL_ADDED:
            return {
                ...state,
                currentBarVisualisation: action.payload,
            };
        case ReducerActions.CURRENT_BAR_VISUAL_RESET:
            return {
                currentBarVisualisation: {},
            };
        //currentMarkVisualisation slice
        case ReducerActions.CURRENT_MARK_VISUAL_ADDED:
            return {
                ...state,
                currentMarkVisualisation: action.payload,
            };
        case ReducerActions.CURRENT_MARK_VISUAL_RESET:
            return {
                currentMarkVisualisation: {},
            };
        default:
            return state;
    }
}
