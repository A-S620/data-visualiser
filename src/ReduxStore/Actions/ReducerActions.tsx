import * as reducerActionTypes from './ReducerActionTypes';
import { ILinePlotOptions } from '../../interfaces/plotting/ILinePlotOptions';
import { ILinePlotCreateVis } from '../../interfaces/plotting/ILinePlotCreateVis';

export const addDataFields = (dataFields: Array<string>) => ({
    type: reducerActionTypes.DATA_FIELDS_ADDED,
    payload: dataFields,
});
export const addDataAsArrays = (dataArrays: Array<Array<any>>) => ({
    type: reducerActionTypes.DATA_AS_ARRAYS_ADDED,
    payload: dataArrays,
});
export const addDataAsObjects = (dataObjects: Array<object>) => ({
    type: reducerActionTypes.DATA_AS_OBJECTS_ADDED,
    payload: dataObjects,
});
export const resetImportedData = () => ({
    type: reducerActionTypes.IMPORTED_DATA_SLICE_RESET,
});

//analysedData Slice
export const addFields = (fields: Array<object>) => ({
    type: reducerActionTypes.FIELDS_ADDED,
    payload: fields,
});
export const addIntervalFields = (intervalFields: Array<string>) => ({
    type: reducerActionTypes.INTERVAL_FIELDS_ADDED,
    payload: intervalFields,
});
export const addIntervalDataObjects = (intervalDataObjects: Array<object>) => ({
    type: reducerActionTypes.INTERVAL_DATA_OBJECTS_ADDED,
    payload: intervalDataObjects,
});
export const addNominalFields = (nominalFields: Array<string>) => ({
    type: reducerActionTypes.NOMINAL_FIELDS_ADDED,
    payload: nominalFields,
});
export const addNominalDataObjects = (nominalDataObjects: Array<object>) => ({
    type: reducerActionTypes.NOMINAL_DATA_OBJECTS_ADDED,
    payload: nominalDataObjects,
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
