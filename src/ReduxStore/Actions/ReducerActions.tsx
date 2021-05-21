import * as reducerActionTypes from './ReducerActionTypes';
import { ILineSeriesOptions } from '../../Interfaces/Visualisations/Line/ILineSeriesOptions';
import { ILineSeriesVis } from '../../Interfaces/Visualisations/Line/ILineSeriesVis';
import { IBarSeriesOptions } from '../../Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { IBarSeriesVis } from '../../Interfaces/Visualisations/Bar/IBarSeriesVis';
import { IMarkSeriesOptions } from '../../Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { IMarkSeriesVis } from '../../Interfaces/Visualisations/Mark/IMarkSeriesVis';
import { IHeatmapSeriesOptions } from '../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { IHeatmapSeriesVis } from '../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesVis';
import { IAreaSeriesOptions } from '../../Interfaces/Visualisations/Area/IAreaSeriesOptions';
import { IAreaSeriesVis } from '../../Interfaces/Visualisations/Area/IAreaSeriesVis';
import { IRadialSeriesOptions } from '../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { IRadialSeriesVis } from '../../Interfaces/Visualisations/Radial/IRadialSeriesVis';

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
export const addOrdinalFields = (ordinalFields: Array<string>) => ({
    type: reducerActionTypes.ORDINAL_FIELDS_ADDED,
    payload: ordinalFields,
});
export const addOrdinalDataObjects = (ordinalDataObjects: Array<object>) => ({
    type: reducerActionTypes.ORDINAL_DATA_OBJECTS_ADDED,
    payload: ordinalDataObjects,
});
export const addBinaryFields = (binaryFields: Array<string>) => ({
    type: reducerActionTypes.BINARY_FIELDS_ADDED,
    payload: binaryFields,
});
export const addBinaryDataObjects = (binaryDataObjects: Array<object>) => ({
    type: reducerActionTypes.BINARY_DATA_OBJECTS_ADDED,
    payload: binaryDataObjects,
});
export const addIgnoreFields = (ignoreFields: Array<string>) => ({
    type: reducerActionTypes.IGNORE_FIELDS_ADDED,
    payload: ignoreFields,
});
export const addIgnoreDataObjects = (ignoreDataObjects: Array<object>) => ({
    type: reducerActionTypes.IGNORE_DATA_OBJECTS_ADDED,
    payload: ignoreDataObjects,
});
export const resetAnalysedData = () => ({
    type: reducerActionTypes.ANALYSED_DATA_SLICE_RESET,
});

//plottingOptions slice
export const addLineOptions = (lineSeriesOptions: ILineSeriesOptions) => ({
    type: reducerActionTypes.LINE_OPTIONS_ADDED,
    payload: lineSeriesOptions,
});
export const resetLineOptions = () => ({
    type: reducerActionTypes.LINE_OPTIONS_RESET,
});
export const addBarOptions = (barSeriesOptions: IBarSeriesOptions) => ({
    type: reducerActionTypes.BAR_OPTIONS_ADDED,
    payload: barSeriesOptions,
});
export const resetBarOptions = () => ({
    type: reducerActionTypes.BAR_OPTIONS_RESET,
});
export const addMarkOptions = (markSeriesOptions: IMarkSeriesOptions) => ({
    type: reducerActionTypes.MARK_OPTIONS_ADDED,
    payload: markSeriesOptions,
});
export const resetMarkOptions = () => ({
    type: reducerActionTypes.MARK_OPTIONS_RESET,
});
export const addHeatmapOptions = (heatmapSeriesOptions: IHeatmapSeriesOptions) => ({
    type: reducerActionTypes.HEATMAP_OPTIONS_ADDED,
    payload: heatmapSeriesOptions,
});
export const resetHeatmapOptions = () => ({
    type: reducerActionTypes.HEATMAP_OPTIONS_RESET,
});
export const addAreaOptions = (options: IAreaSeriesOptions) => ({
    type: reducerActionTypes.AREA_OPTIONS_ADDED,
    payload: options,
});
export const resetAreaOptions = () => ({
    type: reducerActionTypes.AREA_OPTIONS_RESET,
});
export const addRadialOptions = (options: IRadialSeriesOptions) => ({
    type: reducerActionTypes.RADIAL_OPTIONS_ADDED,
    payload: options,
});
export const resetRadialOptions = () => ({
    type: reducerActionTypes.RADIAL_OPTIONS_RESET,
});
//currentLineVisual slice
export const addCurrentLineVisual = (currentLineVisual: ILineSeriesVis) => ({
    type: reducerActionTypes.CURRENT_LINE_VISUAL_ADDED,
    payload: currentLineVisual,
});
export const resetCurrentLineVisual = () => ({
    type: reducerActionTypes.CURRENT_LINE_VISUAL_RESET,
});
export const addCurrentBarVisual = (currentBarVisual: IBarSeriesVis) => ({
    type: reducerActionTypes.CURRENT_BAR_VISUAL_ADDED,
    payload: currentBarVisual,
});
export const resetCurrentBarVisual = () => ({
    type: reducerActionTypes.CURRENT_BAR_VISUAL_RESET,
});
export const addCurrentMarkVisual = (currentMarkVisual: IMarkSeriesVis) => ({
    type: reducerActionTypes.CURRENT_MARK_VISUAL_ADDED,
    payload: currentMarkVisual,
});
export const resetCurrentMarkVisual = () => ({
    type: reducerActionTypes.CURRENT_MARK_VISUAL_RESET,
});
export const addCurrentHeatmapVisual = (currentVisual: IHeatmapSeriesVis) => ({
    type: reducerActionTypes.CURRENT_HEATMAP_VISUAL_ADDED,
    payload: currentVisual,
});
export const resetCurrentHeatmapVisual = () => ({
    type: reducerActionTypes.CURRENT_HEATMAP_VISUAL_RESET,
});
export const addCurrentAreaVisual = (currentVisual: IAreaSeriesVis) => ({
    type: reducerActionTypes.CURRENT_AREA_VISUAL_ADDED,
    payload: currentVisual,
});
export const resetCurrentAreaVisual = () => ({
    type: reducerActionTypes.CURRENT_AREA_VISUAL_RESET,
});
export const addCurrentRadialVisual = (currentVisual: IRadialSeriesVis) => ({
    type: reducerActionTypes.CURRENT_RADIAL_VISUAL_ADDED,
    payload: currentVisual,
});
export const resetCurrentRadialVisual = () => ({
    type: reducerActionTypes.CURRENT_RADIAL_VISUAL_RESET,
});
//Reset Application State
export const resetApplicationState = () => ({
    type: reducerActionTypes.RESET_APPLICATION_STATE,
});
