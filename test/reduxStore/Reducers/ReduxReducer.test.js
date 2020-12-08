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
describe('ReduxReducer', () => {
    it('should return the initial state', () => {
        //Given there is a Redux reducer
        //When it is first called
        //Then it should return the initial state
        expect(reduxReducer(undefined, {})).toEqual(ReduxState);
    });
    it('should handle DATA_FIELDS_ADDED', () => {
        expect(reduxReducer(undefined, reducerActions.addDataFields(dataFields))).toEqual({
            importedData: {
                dataFields: dataFields,
                dataAsObjects: [],
                dataAsArrays: [],
            },
        });
    });
    it('should handle DATA_AS_ARRAY_ADDED', () => {
        expect(reduxReducer(undefined, reducerActions.addDataAsArrays(dataAsArrays))).toEqual({
            importedData: {
                dataFields: [],
                dataAsObjects: [],
                dataAsArrays: dataAsArrays,
            },
        });
    });
    it('should handle DATA_AS_OBJECTS_ADDED', () => {
        expect(reduxReducer(undefined, reducerActions.addDataAsObjects(dataAsObjects))).toEqual({
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
        ).toEqual({
            importedData: {
                dataFields: [],
                dataAsObjects: [],
                dataAsArrays: [],
            },
            analysedData: {
                integerFields: [],
                integerDataObjects: [],
                integerDataArrays: [],
            },
        });
    });
});
