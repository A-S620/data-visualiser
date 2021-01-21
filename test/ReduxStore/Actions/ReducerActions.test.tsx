import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import * as actionTypes from '../../../src/ReduxStore/Actions/ReducerActionTypes';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlotOptions';
import { ILinePlotCreateVis } from '../../../src/interfaces/plotting/ILinePlotCreateVis';
import { FieldTypes } from '../../../src/interfaces/import/IAnalysedFileData';
import { IField } from '../../../src/interfaces/import/IField';

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
const fields: Array<IField> = [{ field: { field: 'col1', fieldType: FieldTypes.INTERVAL } }];
const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
describe('Reducer actions', () => {
    describe('Imported data actions', () => {
        it('Should create an action to add the dataFields', () => {
            const expectedAction = {
                type: actionTypes.DATA_FIELDS_ADDED,
                payload: dataFields,
            };
            expect(reducerActions.addDataFields(dataFields)).toEqual(expectedAction);
        });
        it('Should create an action to add the data as Arrays', () => {
            const expectedAction = {
                type: actionTypes.DATA_AS_ARRAYS_ADDED,
                payload: dataAsArrays,
            };
            expect(reducerActions.addDataAsArrays(dataAsArrays)).toEqual(expectedAction);
        });
        it('Should create an action to add the data as objects', () => {
            const expectedAction = {
                type: actionTypes.DATA_AS_OBJECTS_ADDED,
                payload: dataAsObjects,
            };
            expect(reducerActions.addDataAsObjects(dataAsObjects)).toEqual(expectedAction);
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
                payload: fields,
            };
            expect(reducerActions.addFields(fields)).toEqual(expectedAction);
        });
        it('Should create an action to add the intervalFields', () => {
            const expectedAction = {
                type: actionTypes.INTEGER_FIELDS_ADDED,
                payload: dataFields,
            };
            expect(reducerActions.addIntegerFields(dataFields)).toEqual(expectedAction);
        });
        it('Should create an action to add the intervalDataObjects', () => {
            const expectedAction = {
                type: actionTypes.INTEGER_DATA_OBJECTS_ADDED,
                payload: intervalDataObjects,
            };
            expect(reducerActions.addIntegerDataObjects(intervalDataObjects)).toEqual(expectedAction);
        });
        it('Should create an action to reset analysed data', () => {
            const expectedAction = {
                type: actionTypes.ANALYSED_DATA_SLICE_RESET,
            };
            expect(reducerActions.resetAnalysedData()).toEqual(expectedAction);
        });
    });
    describe('Plotting Options actions', () => {
        it('Should create an action to add the line options', () => {
            const lineOptions: ILinePlotOptions = {
                xValue: 'test',
                yValue: 'test2',
                height: 800,
                width: 800,
                colour: '#000000',
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
        it('Should create an action to rest the options', () => {
            const expectedAction = {
                type: actionTypes.LINE_OPTIONS_RESET,
            };
            expect(reducerActions.resetLineOptions()).toEqual(expectedAction);
        });
    });
    describe('Current Visualisation actions', () => {
        it('Should create an action to add the current Visualisation', () => {
            const currentVisual: ILinePlotCreateVis = {
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
            const expectedAction = {
                type: actionTypes.CURRENT_VISUAL_ADDED,
                payload: currentVisual,
            };
            expect(reducerActions.addCurrentVisual(currentVisual)).toEqual(expectedAction);
        });
        it('Should create an action to rest the current Visualisation', () => {
            const expectedAction = {
                type: actionTypes.CURRENT_VISUAL_RESET,
            };
            expect(reducerActions.resetCurrentVisual()).toEqual(expectedAction);
        });
    });
});
