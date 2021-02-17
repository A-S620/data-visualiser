import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import * as actionTypes from '../../../src/ReduxStore/Actions/ReducerActionTypes';
import {
    CurveType,
    ILineSeriesOptions,
    LineStyle,
} from '../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { ILineSeriesCreateVis } from '../../../src/Interfaces/Visualisations/Line/ILineSeriesCreateVis';
import { FieldTypes } from '../../../src/Interfaces/Analyse/IAnalysedFileData';
import { IBarSeriesOptions, yValue } from '../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { IBarSeriesCreateVis } from '../../../src/Interfaces/Visualisations/Bar/IBarSeriesCreateVis';
import { IMarkSeriesOptions } from '../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { IMarkSeriesCreateVis } from '../../../src/Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';

describe('Reducer actions', () => {
    describe('Imported data actions', () => {
        it('Should create an action to add the dataFields', () => {
            const expectedAction = {
                type: actionTypes.DATA_FIELDS_ADDED,
                payload: ['col1', 'col2', 'col3'],
            };
            expect(reducerActions.addDataFields(['col1', 'col2', 'col3'])).toEqual(expectedAction);
        });
        it('Should create an action to add the data as Arrays', () => {
            const expectedAction = {
                type: actionTypes.DATA_AS_ARRAYS_ADDED,
                payload: [
                    ['col1', 'col2', 'col3'],
                    [' 1', '3', 'foo'],
                    [' 2', '5', 'bar'],
                    ['c-1', '7', 'baz'],
                ],
            };
            expect(
                reducerActions.addDataAsArrays([
                    ['col1', 'col2', 'col3'],
                    [' 1', '3', 'foo'],
                    [' 2', '5', 'bar'],
                    ['c-1', '7', 'baz'],
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to add the data as objects', () => {
            const expectedAction = {
                type: actionTypes.DATA_AS_OBJECTS_ADDED,
                payload: [
                    { col1: ' 1', col2: '3', col3: 'foo' },
                    { col1: ' 2', col2: '5', col3: 'bar' },
                    { col1: 'c-1', col2: '7', col3: 'baz' },
                ],
            };
            expect(
                reducerActions.addDataAsObjects([
                    { col1: ' 1', col2: '3', col3: 'foo' },
                    { col1: ' 2', col2: '5', col3: 'bar' },
                    { col1: 'c-1', col2: '7', col3: 'baz' },
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to reset imported data', () => {
            const expectedAction = {
                type: actionTypes.IMPORTED_DATA_SLICE_RESET,
            };
            expect(reducerActions.resetImportedData()).toEqual(expectedAction);
        });
    });
    describe('Analysed data actions', () => {
        it('Should create an action to add the fields', () => {
            const expectedAction = {
                type: actionTypes.FIELDS_ADDED,
                payload: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }],
            };
            expect(reducerActions.addFields([{ field: 'col1', fieldType: FieldTypes.INTERVAL }])).toEqual(
                expectedAction
            );
        });
        it('Should create an action to add the intervalFields', () => {
            const expectedAction = {
                type: actionTypes.INTERVAL_FIELDS_ADDED,
                payload: ['col1', 'col2', 'col3'],
            };
            expect(reducerActions.addIntervalFields(['col1', 'col2', 'col3'])).toEqual(expectedAction);
        });
        it('Should create an action to add the intervalDataObjects', () => {
            const expectedAction = {
                type: actionTypes.INTERVAL_DATA_OBJECTS_ADDED,
                payload: [
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ],
            };
            expect(
                reducerActions.addIntervalDataObjects([
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to add the nominalFields', () => {
            const expectedAction = {
                type: actionTypes.NOMINAL_FIELDS_ADDED,
                payload: ['col1', 'col2', 'col3'],
            };
            expect(reducerActions.addNominalFields(['col1', 'col2', 'col3'])).toEqual(expectedAction);
        });
        it('Should create an action to add the nominalDataObjects', () => {
            const expectedAction = {
                type: actionTypes.NOMINAL_DATA_OBJECTS_ADDED,
                payload: [
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ],
            };
            expect(
                reducerActions.addNominalDataObjects([
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to add the ordinalFields', () => {
            const expectedAction = {
                type: actionTypes.ORDINAL_FIELDS_ADDED,
                payload: ['col1', 'col2', 'col3'],
            };
            expect(reducerActions.addOrdinalFields(['col1', 'col2', 'col3'])).toEqual(expectedAction);
        });
        it('Should create an action to add the ordinalDataObjects', () => {
            const expectedAction = {
                type: actionTypes.ORDINAL_DATA_OBJECTS_ADDED,
                payload: [
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ],
            };
            expect(
                reducerActions.addOrdinalDataObjects([
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to add the binaryFields', () => {
            const expectedAction = {
                type: actionTypes.BINARY_FIELDS_ADDED,
                payload: ['col1', 'col2', 'col3'],
            };
            expect(reducerActions.addBinaryFields(['col1', 'col2', 'col3'])).toEqual(expectedAction);
        });
        it('Should create an action to add the binaryDataObjects', () => {
            const expectedAction = {
                type: actionTypes.BINARY_DATA_OBJECTS_ADDED,
                payload: [
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ],
            };
            expect(
                reducerActions.addBinaryDataObjects([
                    { col1: 32, col2: 45 },
                    { col1: 79, col2: 5 },
                    { col1: 76, col2: 23 },
                ])
            ).toEqual(expectedAction);
        });
        it('Should create an action to reset analysed data', () => {
            const expectedAction = {
                type: actionTypes.ANALYSED_DATA_SLICE_RESET,
            };
            expect(reducerActions.resetAnalysedData()).toEqual(expectedAction);
        });
    });
    describe('Line series Options actions', () => {
        it('Should create an action to add the line options', () => {
            const lineOptions: ILineSeriesOptions = {
                xValue: 'test',
                yValue: 'test2',
                height: 800,
                width: 800,
                stroke: '#000000',
                opacity: 2,
                curveType: CurveType.curveMonotoneY,
                lineStyle: LineStyle.SOLID,
                lineWidth: 2,
            };
            const expectedAction = {
                type: actionTypes.LINE_OPTIONS_ADDED,
                payload: lineOptions,
            };
            expect(reducerActions.addLineOptions(lineOptions)).toEqual(expectedAction);
        });
        it('Should create an action to reset the bar options', () => {
            const expectedAction = {
                type: actionTypes.LINE_OPTIONS_RESET,
            };
            expect(reducerActions.resetLineOptions()).toEqual(expectedAction);
        });
    });
    describe('Current Line Visualisation actions', () => {
        it('Should create an action to add the current line Visualisation', () => {
            const currentVisual: ILineSeriesCreateVis = {
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
            const expectedAction = {
                type: actionTypes.CURRENT_LINE_VISUAL_ADDED,
                payload: currentVisual,
            };
            expect(reducerActions.addCurrentLineVisual(currentVisual)).toEqual(expectedAction);
        });
        it('Should create an action to reset the current line Visualisation', () => {
            const expectedAction = {
                type: actionTypes.CURRENT_LINE_VISUAL_RESET,
            };
            expect(reducerActions.resetCurrentLineVisual()).toEqual(expectedAction);
        });
    });
    describe('Bar series Options actions', () => {
        it('Should create an action to add the bar options', () => {
            const barOptions: IBarSeriesOptions = {
                barWidth: 0,
                colour: '',
                fill: '',
                xValue: 'test',
                yValue: yValue.count,
                height: 800,
                width: 800,
                stroke: '#000000',
                opacity: 2,
            };
            const expectedAction = {
                type: actionTypes.BAR_OPTIONS_ADDED,
                payload: barOptions,
            };
            expect(reducerActions.addBarOptions(barOptions)).toEqual(expectedAction);
        });
        it('Should create an action to reset the bar options', () => {
            const expectedAction = {
                type: actionTypes.BAR_OPTIONS_RESET,
            };
            expect(reducerActions.resetBarOptions()).toEqual(expectedAction);
        });
    });
    describe('Current Bar Visualisation actions', () => {
        it('Should create an action to add the current bar Visualisation', () => {
            const currentBarVisual: IBarSeriesCreateVis = {
                barWidth: 0,
                fill: '',
                data: [
                    { x: 79, y: 5 },
                    { x: 76, y: 23 },
                ],
                height: 500,
                width: 500,
                stroke: '000000',
                opacity: 0.5,
                colour: '000000',
            };
            const expectedAction = {
                type: actionTypes.CURRENT_BAR_VISUAL_ADDED,
                payload: currentBarVisual,
            };
            expect(reducerActions.addCurrentBarVisual(currentBarVisual)).toEqual(expectedAction);
        });
        it('Should create an action to reset the current bar Visualisation', () => {
            const expectedAction = {
                type: actionTypes.CURRENT_BAR_VISUAL_RESET,
            };
            expect(reducerActions.resetCurrentBarVisual()).toEqual(expectedAction);
        });
    });
    describe('Mark Series Options actions', () => {
        it('Should create an action to add the mark options', () => {
            const markOptions: IMarkSeriesOptions = {
                colour: '',
                fill: '',
                height: 0,
                opacity: 0,
                stroke: '',
                width: 0,
                xValue: 'test',
                yValue: yValue.percent,
            };
            const expectedAction = {
                type: actionTypes.MARK_OPTIONS_ADDED,
                payload: markOptions,
            };
            expect(reducerActions.addMarkOptions(markOptions)).toEqual(expectedAction);
        });
        it('Should create an action to reset the mark options', () => {
            const expectedAction = {
                type: actionTypes.MARK_OPTIONS_RESET,
            };
            expect(reducerActions.resetMarkOptions()).toEqual(expectedAction);
        });
    });
    describe('Current Mark Visualisation actions', () => {
        it('Should create an action to add the current mark Visualisation', () => {
            const currentMarkVisual: IMarkSeriesCreateVis = {
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
            const expectedAction = {
                type: actionTypes.CURRENT_MARK_VISUAL_ADDED,
                payload: currentMarkVisual,
            };
            expect(reducerActions.addCurrentMarkVisual(currentMarkVisual)).toEqual(expectedAction);
        });
        it('Should create an action to reset the current mark Visualisation', () => {
            const expectedAction = {
                type: actionTypes.CURRENT_MARK_VISUAL_RESET,
            };
            expect(reducerActions.resetCurrentMarkVisual()).toEqual(expectedAction);
        });
    });
});
