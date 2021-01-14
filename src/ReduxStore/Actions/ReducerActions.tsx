import * as reducerActionTypes from './ReducerActionTypes';
import { ILinePlotOptions } from '../../interfaces/plotting/ILinePlotOptions';
import { ILinePlotCreateVis } from '../../interfaces/plotting/ILinePlotCreateVis';

export const addDataFields = (dataFields: Array<string>) => ({
    type: reducerActionTypes.DATA_FIELDS_ADDED,
    payload: dataFields,
});
export const addDataAsArrays = (dataAsArrays: Array<Array<any>>) => ({
    type: reducerActionTypes.DATA_AS_ARRAYS_ADDED,
    payload: dataAsArrays,
});
export const addDataAsObjects = (dataAsObjects: Array<object>) => ({
    type: reducerActionTypes.DATA_AS_OBJECTS_ADDED,
    payload: dataAsObjects,
});
export const resetImportedData = () => ({
    type: reducerActionTypes.IMPORTED_DATA_SLICE_RESET,
});

//analysedData Slice
export const addIntegerFields = (integerFields: Array<string>) => ({
    type: reducerActionTypes.INTEGER_FIELDS_ADDED,
    payload: integerFields,
});
export const addIntegerDataObjects = (integerDataObjects: Array<object>) => ({
    type: reducerActionTypes.INTEGER_DATA_OBJECTS_ADDED,
    payload: integerDataObjects,
});
export const resetAnalysedData = () => ({
    type: reducerActionTypes.ANALYSED_DATA_SLICE_RESET,
});

//plottingOptions slice
export const addLineOptions = (linePlotOptions: ILinePlotOptions) => ({
    type: reducerActionTypes.LINE_OPTIONS_ADDED,
    payload: linePlotOptions,
});
export const resetLineOptions = () => ({
    type: reducerActionTypes.LINE_OPTIONS_RESET,
});

//currentVisualisation slice
export const addCurrentVisual = (currentVisualisation: ILinePlotCreateVis) => ({
    type: reducerActionTypes.CURRENT_VISUAL_ADDED,
    payload: currentVisualisation,
});
export const resetCurrentVisual = () => ({
    type: reducerActionTypes.CURRENT_VISUAL_RESET,
});
