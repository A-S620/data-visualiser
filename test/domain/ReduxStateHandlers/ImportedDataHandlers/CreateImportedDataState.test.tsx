//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/CreateImportedDataState';
import GetImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/GetImportedDataState';
import ResetImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/ResetImportedDataState';
//Store components
import Store from '../../../../src/store/Store';

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

//Runs before each test
beforeEach(() => {
    const resetImportedDataState = new ResetImportedDataState();
    resetImportedDataState.resetImportedDataState();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedDataState();
    resetImportedDataState.resetImportedDataState();
});
describe('CreateImportedDataState domain component', () => {
    it('Should add dataFields to the dataFields attribute in the Redux State', () => {
        //Given I have dataFields as a array
        //When I create an instance of CreateImportedDataState
        //Then the CreateImportedDataState should add the dataFields to the dataFields attribute in the redux state
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataFields();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataFields()).toStrictEqual(dataFields);
    });
    it('Should add data as Arrays to the dataAsArrays attribute in the redux store', () => {
        //Given I have CSV data as an array
        //When I create an instance of CreateImportedDataState
        //Then the CreateImportedDataState should add the data to the dataAsArrays attribute in the redux state
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual(dataAsArrays);
    });
    it('Should add data as Objects to the dataAsObjects attribute in the redux store', () => {
        //Given I have CSV data as an object
        //When I create an instance of CreateImportedDataState
        //Then the CreateImportedDataState should add the data to the dataAsObjects attribute in the redux state
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataAsObjects()).toStrictEqual(dataAsObjects);
    });
});
