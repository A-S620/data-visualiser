import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import reduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import ReduxState from '../../../src/ReduxStore/ReduxState';
import { CurveType, ILinePlottingOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlottingOptions';

//Test Data
const dataAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const dataAsObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const dataFields = ['col1', 'col2', 'col3'];

const integerDataObjects = [
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
                dataAsObjects: [],
                dataAsArrays: [],
            },
        };
        it('should handle DATA_FIELDS_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataFields(dataFields))).toEqual({
                importedData: {
                    dataFields: dataFields,
                    dataAsObjects: [],
                    dataAsArrays: [],
                },
            });
        });
        it('should handle DATA_AS_ARRAY_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataAsArrays(dataAsArrays))).toEqual({
                importedData: {
                    dataFields: [],
                    dataAsObjects: [],
                    dataAsArrays: dataAsArrays,
                },
            });
        });
        it('should handle DATA_AS_OBJECTS_ADDED', () => {
            expect(reduxReducer(importedDataSlice, reducerActions.addDataAsObjects(dataAsObjects))).toEqual({
                importedData: {
                    dataFields: [],
                    dataAsObjects: dataAsObjects,
                    dataAsArrays: [],
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
                                dataAsObjects: [],
                                dataAsArrays: [],
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
                integerFields: [],
                integerDataObjects: [],
            },
        };
        it('Should handle INTEGER_FIELDS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIntegerFields(dataFields))).toEqual({
                analysedData: {
                    integerFields: dataFields,
                    integerDataObjects: [],
                },
            });
        });
        it('Should handle INTEGER_DATA_OBJECTS_ADDED', () => {
            expect(reduxReducer(analysedDataSlice, reducerActions.addIntegerDataObjects(integerDataObjects))).toEqual({
                analysedData: {
                    integerFields: [],
                    integerDataObjects: integerDataObjects,
                },
            });
        });
        it('Should handle ANALYSED_DATA_SLICE_RESET', () => {
            expect(
                reduxReducer(
                    [
                        {
                            analysedData: {
                                integerFields: [],
                                integerDataObjects: integerDataObjects,
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
});
