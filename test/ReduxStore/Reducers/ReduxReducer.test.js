import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import reduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import ReduxState from '../../../src/ReduxStore/ReduxState';
import { CurveType, LineStyle } from '../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { FieldTypes } from '../../../src/Interfaces/Analyse/IAnalysedFileData';

describe('ReduxReducer', () => {
    it('should return the initial state', () => {
        expect(reduxReducer(undefined, {})).toEqual(ReduxState);
    });
    describe('Imported data slice', () => {
        const importedDataSlice = {
            importedData: {
                dataFields: [],
                dataObjects: [],
                dataArrays: [],
            },
        };
        it('should handle DATA_FIELDS_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataFields(['col1', 'col2', 'col3']))).toEqual({
                importedData: {
                    dataFields: ['col1', 'col2', 'col3'],
                    dataObjects: [],
                    dataArrays: [],
                },
            });
        });
        it('should handle DATA_AS_ARRAY_ADDED', () => {
            expect(
                reduxReducer(
                    importedDataSlice,
                    reducerActions.addDataAsArrays([
                        ['col1', 'col2', 'col3'],
                        [' 1', '3', 'foo'],
                        [' 2', '5', 'bar'],
                        ['c-1', '7', 'baz'],
                    ])
                )
            ).toEqual({
                importedData: {
                    dataFields: [],
                    dataObjects: [],
                    dataArrays: [
                        ['col1', 'col2', 'col3'],
                        [' 1', '3', 'foo'],
                        [' 2', '5', 'bar'],
                        ['c-1', '7', 'baz'],
                    ],
                },
            });
        });
        it('should handle DATA_AS_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    importedDataSlice,
                    reducerActions.addDataAsObjects([
                        { col1: ' 1', col2: '3', col3: 'foo' },
                        { col1: ' 2', col2: '5', col3: 'bar' },
                        { col1: 'c-1', col2: '7', col3: 'baz' },
                    ])
                )
            ).toEqual({
                importedData: {
                    dataFields: [],
                    dataObjects: [
                        { col1: ' 1', col2: '3', col3: 'foo' },
                        { col1: ' 2', col2: '5', col3: 'bar' },
                        { col1: 'c-1', col2: '7', col3: 'baz' },
                    ],
                    dataArrays: [],
                },
            });
        });
        it('should handle IMPORTED_DATA_STATE_RESET', () => {
            expect(
                reduxReducer(
                    [
                        {
                            importedData: {
                                dataFields: ['col1', 'col2', 'col3'],
                                dataObjects: [],
                                dataArrays: [],
                            },
                        },
                    ],
                    reducerActions.resetImportedData()
                )
            ).toEqual(importedDataSlice);
        });
    });
    describe('Analysed data slice', () => {
        const analysedDataSlice = {
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
        it('Should handle FIELDS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addFields([
                        { field: 'col1', fieldType: FieldTypes.INTERVAL },
                        { field: 'col2', fieldType: FieldTypes.INTERVAL },
                        { field: 'col3', fieldType: FieldTypes.NOMINAL },
                    ])
                )
            ).toEqual({
                analysedData: {
                    fields: [
                        { field: 'col1', fieldType: FieldTypes.INTERVAL },
                        { field: 'col2', fieldType: FieldTypes.INTERVAL },
                        { field: 'col3', fieldType: FieldTypes.NOMINAL },
                    ],
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
            });
        });
        it('Should handle INTERVAL_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIntervalFields(['col1', 'col2', 'col3']))).toEqual(
                {
                    analysedData: {
                        fields: [],
                        intervalFields: ['col1', 'col2', 'col3'],
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
                }
            );
        });
        it('Should handle INTERVAL_DATA_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addIntervalDataObjects([
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ])
                )
            ).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [],
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle NOMINAL_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addNominalFields(['col1', 'col2', 'col3']))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: ['col1', 'col2', 'col3'],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [],
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle NOMINAL_DATA_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addNominalDataObjects([
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ])
                )
            ).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ],
                    ordinalFields: [],
                    ordinalDataObjects: [],
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle ORDINAL_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addOrdinalFields(['col1', 'col2', 'col3']))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: ['col1', 'col2', 'col3'],
                    ordinalDataObjects: [],
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle ORDINAL_DATA_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addOrdinalDataObjects([
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ])
                )
            ).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ],
                    binaryFields: [],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle BINARY_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addBinaryFields(['col1', 'col2', 'col3']))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [],
                    binaryFields: ['col1', 'col2', 'col3'],
                    binaryDataObjects: [],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle BINARY_DATA_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addBinaryDataObjects([
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ])
                )
            ).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                    ordinalFields: [],
                    ordinalDataObjects: [],
                    binaryFields: [],
                    binaryDataObjects: [
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ],
                    ignoreFields: [],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle IGNORE_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIgnoreFields(['col1', 'col2', 'col3']))).toEqual({
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
                    ignoreFields: ['col1', 'col2', 'col3'],
                    ignoreDataObjects: [],
                },
            });
        });
        it('Should handle IGNORE_DATA_OBJECTS_ADDED', () => {
            expect(
                reduxReducer(
                    analysedDataSlice,
                    reducerActions.addIgnoreDataObjects([
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ])
                )
            ).toEqual({
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
                    ignoreDataObjects: [
                        { col1: 32, col2: 45 },
                        { col1: 79, col2: 5 },
                        { col1: 76, col2: 23 },
                    ],
                },
            });
        });
        it('Should handle ANALYSED_DATA_SLICE_RESET', () => {
            expect(
                reduxReducer(
                    [
                        {
                            analysedData: {
                                fields: [],
                                intervalFields: [],
                                intervalDataObjects: [
                                    { col1: 32, col2: 45 },
                                    { col1: 79, col2: 5 },
                                    { col1: 76, col2: 23 },
                                ],
                                nominalFields: [],
                                nominalDataObjects: [],
                                ordinalFields: [],
                                ordinalDataObjects: [],
                                binaryFields: [],
                                binaryDataObjects: [],
                                ignoreFields: [],
                                ignoreDataObjects: [],
                            },
                        },
                    ],
                    reducerActions.resetAnalysedData()
                )
            ).toEqual(analysedDataSlice);
        });
    });
    describe('Line Plot Options slice', () => {
        const lineSeriesOptions = {
            lineSeriesOptions: {},
        };
        const lineOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        it('Should handle LINE_OPTIONS_ADDED', () => {
            expect(reduxReducer(lineSeriesOptions, reducerActions.addLineOptions(lineOptions))).toEqual({
                lineSeriesOptions: {
                    xValue: 'test',
                    yValue: 'test2',
                    height: 500,
                    width: 500,
                    stroke: '#cd3b55',
                    opacity: 0.5,
                    curveType: CurveType.curveMonotoneY,
                    lineStyle: LineStyle.SOLID,
                    lineWidth: 2,
                },
            });
        });
        it('Should handle LINE_OPTIONS_RESET', () => {
            expect(
                reduxReducer(
                    {
                        lineSeriesOptions: {
                            xValue: 'test',
                            yValue: 'test2',
                            height: 500,
                            width: 500,
                            stroke: '#cd3b55',
                            opacity: 0,
                            curveType: CurveType.curveMonotoneY,
                            lineStyle: LineStyle.SOLID,
                            lineWidth: 2,
                        },
                    },
                    reducerActions.resetLineOptions()
                )
            ).toEqual(lineSeriesOptions);
        });
    });
    describe('Current Line Visualisation', () => {
        const currentLineVisualSlice = {
            currentLineVisualisation: {},
        };
        const currentVisual = {
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        it('Should handle CURRENT_LINE_VISUAL_ADDED', () => {
            expect(reduxReducer(currentLineVisualSlice, reducerActions.addCurrentLineVisual(currentVisual))).toEqual({
                currentLineVisualisation: {
                    data: [
                        { x: 79, y: 5 },
                        { x: 76, y: 23 },
                    ],
                    height: 500,
                    width: 500,
                    stroke: '000000',
                    opacity: 0.5,
                    curveType: CurveType.curveMonotoneY,
                    lineStyle: LineStyle.SOLID,
                    lineWidth: 2,
                },
            });
        });
        it('Should handle CURRENT_LINE_VISUAL_RESET', () => {
            expect(
                reduxReducer(
                    {
                        currentLineVisualisation: {
                            data: [
                                { x: 79, y: 5 },
                                { x: 76, y: 23 },
                            ],
                            height: 500,
                            width: 500,
                            stroke: '000000',
                            opacity: 0.5,
                            curveType: CurveType.curveMonotoneY,
                            lineStyle: LineStyle.SOLID,
                            lineWidth: 2,
                        },
                    },
                    reducerActions.resetCurrentLineVisual()
                )
            ).toEqual(currentLineVisualSlice);
        });
    });
    describe('Bar Plot Options slice', () => {
        const barSeriesOptions = {
            barSeriesOptions: {},
        };
        const barOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        it('Should handle BAR_OPTIONS_ADDED', () => {
            expect(reduxReducer(barSeriesOptions, reducerActions.addBarOptions(barOptions))).toEqual({
                barSeriesOptions: {
                    xValue: 'test',
                    yValue: 'test2',
                    height: 500,
                    width: 500,
                    stroke: '#cd3b55',
                    opacity: 0.5,
                    curveType: CurveType.curveMonotoneY,
                    lineStyle: LineStyle.SOLID,
                    lineWidth: 2,
                },
            });
        });
        it('Should handle BAR_OPTIONS_RESET', () => {
            expect(
                reduxReducer(
                    {
                        barSeriesOptions: {
                            xValue: 'test',
                            yValue: 'test2',
                            height: 500,
                            width: 500,
                            stroke: '#cd3b55',
                            opacity: 0,
                            curveType: CurveType.curveMonotoneY,
                            lineStyle: LineStyle.SOLID,
                            lineWidth: 2,
                        },
                    },
                    reducerActions.resetBarOptions()
                )
            ).toEqual(barSeriesOptions);
        });
    });
    describe('Current Bar Visualisation', () => {
        const currentBarVisualSlice = {
            currentBarVisualisation: {},
        };
        const currentVisual = {
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        it('Should handle CURRENT_BAR_VISUAL_ADDED', () => {
            expect(reduxReducer(currentBarVisualSlice, reducerActions.addCurrentBarVisual(currentVisual))).toEqual({
                currentBarVisualisation: {
                    data: [
                        { x: 79, y: 5 },
                        { x: 76, y: 23 },
                    ],
                    height: 500,
                    width: 500,
                    stroke: '000000',
                    opacity: 0.5,
                    curveType: CurveType.curveMonotoneY,
                    lineStyle: LineStyle.SOLID,
                    lineWidth: 2,
                },
            });
        });
        it('Should handle CURRENT_BAR_VISUAL_RESET', () => {
            expect(
                reduxReducer(
                    {
                        currentBarVisualisation: {
                            data: [
                                { x: 79, y: 5 },
                                { x: 76, y: 23 },
                            ],
                            height: 500,
                            width: 500,
                            stroke: '000000',
                            opacity: 0.5,
                            curveType: CurveType.curveMonotoneY,
                            lineStyle: LineStyle.SOLID,
                            lineWidth: 2,
                        },
                    },
                    reducerActions.resetCurrentBarVisual()
                )
            ).toEqual(currentBarVisualSlice);
        });
    });
    describe('Mark Plot Options slice', () => {
        const markSeriesOptions = {
            markSeriesOptions: {},
        };
        const markOptions = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: 'test',
            yValue: 'test',
        };
        it('Should handle MARK_OPTIONS_ADDED', () => {
            expect(reduxReducer(markSeriesOptions, reducerActions.addMarkOptions(markOptions))).toEqual({
                markSeriesOptions: {
                    colour: '',
                    fill: '',
                    height: 0,
                    opacity: 0,
                    stroke: '',
                    width: 0,
                    xValue: 'test',
                    yValue: 'test',
                },
            });
        });
        it('Should handle MARK_OPTIONS_RESET', () => {
            expect(
                reduxReducer(
                    {
                        markSeriesOptions: {
                            colour: '',
                            fill: '',
                            height: 0,
                            opacity: 0,
                            stroke: '',
                            width: 0,
                            xValue: 'test',
                            yValue: 'test',
                        },
                    },
                    reducerActions.resetMarkOptions()
                )
            ).toEqual(markSeriesOptions);
        });
    });
    describe('Current Mark Visualisation', () => {
        const currentMarkVisualSlice = {
            currentMarkVisualisation: {},
        };
        const currentVisual = {
            colour: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
        };
        it('Should handle CURRENT_MARK_VISUAL_ADDED', () => {
            expect(reduxReducer(currentMarkVisualSlice, reducerActions.addCurrentMarkVisual(currentVisual))).toEqual({
                currentMarkVisualisation: {
                    colour: '',
                    data: [
                        { x: 79, y: 5 },
                        { x: 76, y: 23 },
                    ],
                    fill: '',
                    height: 0,
                    opacity: 0,
                    stroke: '',
                    width: 0,
                },
            });
        });
        it('Should handle CURRENT_MARK_VISUAL_RESET', () => {
            expect(
                reduxReducer(
                    {
                        currentMarkVisualisation: {
                            colour: '',
                            data: [
                                { x: 79, y: 5 },
                                { x: 76, y: 23 },
                            ],
                            fill: '',
                            height: 0,
                            opacity: 0,
                            stroke: '',
                            width: 0,
                        },
                    },
                    reducerActions.resetCurrentMarkVisual()
                )
            ).toEqual(currentMarkVisualSlice);
        });
    });
    describe('Heatmap Options slice', () => {
        const optionsSlice = {
            heatmapSeriesOptions: {},
        };
        const options = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: 'test',
            yValue: 'test',
        };
        it('Should handle HEATMAP_OPTIONS_ADDED', () => {
            expect(reduxReducer(optionsSlice, reducerActions.addHeatmapOptions(options))).toEqual({
                heatmapSeriesOptions: {
                    colour: '',
                    fill: '',
                    height: 0,
                    opacity: 0,
                    stroke: '',
                    width: 0,
                    xValue: 'test',
                    yValue: 'test',
                },
            });
        });
        it('Should handle HEATMAP_OPTIONS_RESET', () => {
            expect(
                reduxReducer(
                    {
                        heatmapSeriesOptions: {
                            colour: '',
                            fill: '',
                            height: 0,
                            opacity: 0,
                            stroke: '',
                            width: 0,
                            xValue: 'test',
                            yValue: 'test',
                        },
                    },
                    reducerActions.resetHeatmapOptions()
                )
            ).toEqual(optionsSlice);
        });
    });
    describe('Reset application state', () => {
        const state = {
            importedData: {
                dataFields: [],
                dataObjects: [],
                dataArrays: [],
            },
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
            lineSeriesOptions: {},
            currentLineVisualisation: {},
            barSeriesOptions: {},
            currentBarVisualisation: {},
            markSeriesOptions: {},
            currentMarkVisualisation: {},
            heatmapSeriesOptions: {},
        };
        it('Should handle RESET_APPLICATION_STATE', () => {
            expect(
                reduxReducer(
                    {
                        importedData: {
                            dataFields: ['test', 'test', 'test'],
                            dataObjects: [],
                            dataArrays: [],
                        },
                        analysedData: {
                            fields: ['test', 'test', 'test'],
                            intervalFields: ['test', 'test', 'test'],
                            intervalDataObjects: [],
                            nominalFields: [],
                            nominalDataObjects: [],
                            ordinalFields: [],
                            ordinalDataObjects: [],
                            binaryFields: [],
                            binaryDataObjects: [],
                            ignoreFields: ['test', 'test', 'test'],
                            ignoreDataObjects: [],
                        },
                        lineSeriesOptions: {},
                        currentLineVisualisation: {},
                        barSeriesOptions: {},
                        currentBarVisualisation: {},
                        markSeriesOptions: {},
                        currentMarkVisualisation: {},
                        heatmapSeriesOptions: {},
                    },
                    reducerActions.resetApplicationState()
                )
            ).toEqual(state);
        });
    });
});
