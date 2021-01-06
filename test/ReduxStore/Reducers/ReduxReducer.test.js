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
    },
};
describe('ReduxReducer', () => {
    it('should return the initial state', () => {
        expect(reduxReducer(undefined, {})).toEqual(ReduxState);
    });
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
