//TODO: fix existing unit tests
//TODO: add unit tests for analysedData slice
//ReduxStore components
import ReduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import * as actionTypes from '../../../src/ReduxStore/Actions/ReducerActionTypes';
import * as reducerActions from '../../../src/ReduxStore/Actions/ReducerActions';
import reduxReducer from '../../../src/ReduxStore/Reducers/ReduxReducer';
import ReduxState from '../../../src/ReduxStore/ReduxState';

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
const integerDataArrays = [
    ['col1', 'col2'],
    [33, 43],
    [9, 3],
    [6, 7],
];
const integerDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
//Mock redux slices
const importedDataSlice = {
    importedData: {
        dataFields: [],
        dataAsObjects: [],
        dataAsArrays: [],
    },
};
const analysedDataSlice = {
    analysedData: {
        integerFields: [],
        integerDataObjects: [],
        integerDataArrays: [],
    },
};
describe('ReduxReducer', () => {
    it('should return the initial state', () => {
        //Given there is a Redux reducer
        //When it is first called
        //Then it should return the initial state
        expect(reduxReducer(undefined, {})).toEqual(ReduxState);
    });
    it('should handle DATA_FIELDS_ADDED', () => {
        //Given there is a Redux reducer
        //When data fields is added to the importedData slice
        //Then it should return the updated state
        expect(reduxReducer(importedDataSlice, reducerActions.addDataFields(dataFields))).toEqual({
            importedData: {
                dataFields: dataFields,
                dataAsObjects: [],
                dataAsArrays: [],
            },
        });
    });
    it('should handle DATA_AS_ARRAY_ADDED', () => {
        //Given there is a Redux reducer
        //When data as arrays is added to the importedData slice
        //Then it should return the updated state
        expect(reduxReducer(importedDataSlice, reducerActions.addDataAsArrays(dataAsArrays))).toEqual({
            importedData: {
                dataFields: [],
                dataAsObjects: [],
                dataAsArrays: dataAsArrays,
            },
        });
    });
    it('should handle DATA_AS_OBJECTS_ADDED', () => {
        //Given there is a Redux reducer
        //When data as objects is added to the importedData slice
        //Then it should return the updated state
        expect(reduxReducer(importedDataSlice, reducerActions.addDataAsObjects(dataAsObjects))).toEqual({
            importedData: {
                dataFields: [],
                dataAsObjects: dataAsObjects,
                dataAsArrays: [],
            },
        });
    });
    it('should handle IMPORTED_DATA_STATE_RESET', () => {
        //Given there is a Redux reducer
        //When data in the importedData slice is reset
        //Then it should return the updated state
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
    it('Should handle INTEGER_FIELDS_ADDED', () => {
        //Given there is a Redux reducer
        //When integer fields is added to the analysedData slice
        //Then it should return the updated state
        expect(reduxReducer(analysedDataSlice, reducerActions.addIntegerFields(dataFields))).toEqual({
            analysedData: {
                integerFields: dataFields,
                integerDataObjects: [],
                integerDataArrays: [],
            },
        });
    });
    it('Should handle INTEGER_DATA_OBJECTS_ADDED', () => {
        //Given there is a Redux reducer
        //When integer data objects is added to the analysedData slice
        //Then it should return the updated state
        expect(reduxReducer(analysedDataSlice, reducerActions.addIntegerDataObjects(integerDataObjects))).toEqual({
            analysedData: {
                integerFields: [],
                integerDataObjects: integerDataObjects,
                integerDataArrays: [],
            },
        });
    });
    it('Should handle INTEGER_DATA_ARRAYS_ADDED', () => {
        //Given there is a Redux reducer
        //When integer data arrays is added to the analysedData slice
        //Then it should return the updated state
        expect(reduxReducer(analysedDataSlice, reducerActions.addIntegerDataArrays(integerDataArrays))).toEqual({
            analysedData: {
                integerFields: [],
                integerDataObjects: [],
                integerDataArrays: integerDataArrays,
            },
        });
    });
    it('Should handle ANALYSED_DATA_SLICE_RESET', () => {
        //Given there is a Redux reducer
        //When data in the analysedData slice is reset
        //Then it should return the updated state
        expect(
            reduxReducer(
                [
                    {
                        analysedData: {
                            integerFields: [],
                            integerDataObjects: [],
                            integerDataArrays: integerDataArrays,
                        },
                    },
                ],
                reducerActions.resetAnalysedData()
            )
        ).toEqual(analysedDataSlice);
    });
});
