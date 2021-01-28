import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import reduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import ReduxState from '../../../src/ReduxStore/ReduxState';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlotOptions';
import { FieldTypes } from '../../../src/interfaces/Analyse/IAnalysedFileData';

//Test Data
const dataArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const dataObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const dataFields = ['col1', 'col2', 'col3'];
const field = { field: { field: 'col1', fieldType: FieldTypes.INTERVAL } };

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
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
            expect(reduxReducer(importedDataSlice, reducerActions.addDataFields(dataFields))).toEqual({
                importedData: {
                    dataFields: dataFields,
                    dataObjects: [],
                    dataArrays: [],
                },
            });
        });
        it('should handle DATA_AS_ARRAY_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataAsArrays(dataArrays))).toEqual({
                importedData: {
                    dataFields: [],
                    dataObjects: [],
                    dataArrays: dataArrays,
                },
            });
        });
        it('should handle DATA_AS_OBJECTS_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataAsObjects(dataObjects))).toEqual({
                importedData: {
                    dataFields: [],
                    dataObjects: dataObjects,
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
                                dataFields: dataFields,
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
            },
        };
        it('Should handle FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addFields(field))).toEqual({
                analysedData: {
                    fields: field,
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                },
            });
        });
        it('Should handle INTERVAL_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIntervalFields(dataFields))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: dataFields,
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: [],
                },
            });
        });
        it('Should handle INTERVAL_DATA_OBJECTS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIntervalDataObjects(intervalDataObjects))).toEqual(
                {
                    analysedData: {
                        fields: [],
                        intervalFields: [],
                        intervalDataObjects: intervalDataObjects,
                        nominalFields: [],
                        nominalDataObjects: [],
                    },
                }
            );
        });
        it('Should handle NOMINAL_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addNominalFields(dataFields))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: dataFields,
                    nominalDataObjects: [],
                },
            });
        });
        it('Should handle NOMINAL_DATA_OBJECTS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addNominalDataObjects(intervalDataObjects))).toEqual({
                analysedData: {
                    fields: [],
                    intervalFields: [],
                    intervalDataObjects: [],
                    nominalFields: [],
                    nominalDataObjects: intervalDataObjects,
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
                                intervalDataObjects: intervalDataObjects,
                                nominalFields: [],
                                nominalDataObjects: [],
                            },
                        },
                    ],
                    reducerActions.resetAnalysedData()
                )
            ).toEqual(analysedDataSlice);
        });
    });
    describe('Plotting options', () => {
        describe('Line Plot Options slice', () => {
            const linePlotOptions = {
                linePlotOptions: {},
            };
            const lineOptions = {
                xValue: 'test',
                yValue: 'test2',
                height: 500,
                width: 500,
                colour: '#cd3b55',
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
                        colour: '#cd3b55',
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
                                colour: '#cd3b55',
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
    });
    describe('Current Visualisation', () => {
        const currentVisualSlice = {
            currentVisualisation: {},
        };
        const currentVisual = {
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        it('Should handle CURRENT_VISUAL_ADDED', () => {
            expect(reduxReducer(currentVisualSlice, reducerActions.addCurrentVisual(currentVisual))).toEqual({
                currentVisualisation: {
                    data: [
                        { x: 79, y: 5 },
                        { x: 76, y: 23 },
                    ],
                    height: 500,
                    width: 500,
                    colour: '000000',
                    opacity: 0.5,
                    curveType: CurveType.curveMonotoneY,
                    lineStyle: LineStyle.SOLID,
                    lineWidth: 2,
                },
            });
        });
        it('Should handle CURRENT_VISUAL_RESET', () => {
            expect(
                reduxReducer(
                    {
                        currentVisualisation: {
                            data: [
                                { x: 79, y: 5 },
                                { x: 76, y: 23 },
                            ],
                            height: 500,
                            width: 500,
                            colour: '000000',
                            opacity: 0.5,
                            curveType: CurveType.curveMonotoneY,
                            lineStyle: LineStyle.SOLID,
                            lineWidth: 2,
                        },
                    },
                    reducerActions.resetCurrentVisual()
                )
            ).toEqual(currentVisualSlice);
        });
    });
});
