//ReduxStore components
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
describe('Reducer actions', () => {
    it('Should create an action to add the dataFields', () => {
        //Given I have dataFields
        //When the action to add the dataFields is carried out
        //Then the dataFields should be added
        const expectedAction = {
            type: actionTypes.DATA_FIELDS_ADDED,
            payload: dataFields,
        };
        expect(reducerActions.addDataFields(dataFields)).toEqual(expectedAction);
    });
    it('Should create an action to add the data as Arrays', () => {
        //Given I have data as Arrays
        //When the action to add the data as Arrays is carried out
        //Then the data as Arrays should be added
        const expectedAction = {
            type: actionTypes.DATA_AS_ARRAYS_ADDED,
            payload: dataAsArrays,
        };
        expect(reducerActions.addDataAsArrays(dataAsArrays)).toEqual(expectedAction);
    });
    it('Should create an action to add the data as objects', () => {
        //Given I have data as Objects
        //When the action to add the data as Objects is carried out
        //Then the data as Objects should be added
        const expectedAction = {
            type: actionTypes.DATA_AS_OBJECTS_ADDED,
            payload: dataAsObjects,
        };
        expect(reducerActions.addDataAsObjects(dataAsObjects)).toEqual(expectedAction);
    });
    it('Should create an action to reset imported data', () => {
        //Given I have data in my store
        //When the action to reset imported data is carried out
        //Then the imported data should be reset
        const expectedAction = {
            type: actionTypes.IMPORTED_DATA_STATE_RESET,
        };
        expect(reducerActions.resetImportedData()).toEqual(expectedAction);
    });
});
