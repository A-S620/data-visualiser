import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import * as actionTypes from '../../../src/ReduxStore/Actions/ReducerActionTypes';

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
describe('Reducer actions', () => {
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
    it('Should create an action to add the integerFields', () => {
        const expectedAction = {
            type: actionTypes.INTEGER_FIELDS_ADDED,
            payload: dataFields,
        };
        expect(reducerActions.addIntegerFields(dataFields)).toEqual(expectedAction);
    });
    it('Should create an action to add the integerDataObjects', () => {
        const expectedAction = {
            type: actionTypes.INTEGER_DATA_OBJECTS_ADDED,
            payload: integerDataObjects,
        };
        expect(reducerActions.addIntegerDataObjects(integerDataObjects)).toEqual(expectedAction);
    });
    it('Should create an action to reset analysed data', () => {
        const expectedAction = {
            type: actionTypes.ANALYSED_DATA_SLICE_RESET,
        };
        expect(reducerActions.resetAnalysedData()).toEqual(expectedAction);
    });
});
