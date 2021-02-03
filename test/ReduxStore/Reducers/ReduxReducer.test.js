import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import reduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import ReduxState from '../../../src/ReduxStore/ReduxState';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/Interfaces/plotting/Line/ILinePlotOptions';
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
                            },
                        },
                    ],
                    reducerActions.resetAnalysedData()
                )
            ).toEqual(analysedDataSlice);
        });
    });
    describe('Line Plot Options slice', () => {
        const linePlotOptions = {
            linePlotOptions: {},
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
            expect(reduxReducer(linePlotOptions, reducerActions.addLineOptions(lineOptions))).toEqual({
                linePlotOptions: {
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
                        linePlotOptions: {
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
            ).toEqual(linePlotOptions);
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
        const barPlotOptions = {
            barPlotOptions: {},
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
            expect(reduxReducer(barPlotOptions, reducerActions.addBarOptions(barOptions))).toEqual({
                barPlotOptions: {
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
                        barPlotOptions: {
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
            ).toEqual(barPlotOptions);
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
});
