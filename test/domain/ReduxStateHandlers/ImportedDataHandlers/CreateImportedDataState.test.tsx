//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import GetImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
import ResetImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
//Store components
import Store from '../../../../src/ReduxStore/Store';

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
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});
describe('CreateImportedData domain component', () => {
    it('Should add dataFields to the dataFields attribute in the Redux State', () => {
        //Given I have dataFields as a array
        //When I create an instance of CreateImportedData
        //Then the CreateImportedData should add the dataFields to the dataFields attribute in the redux state
        const createStoreHandler = new CreateImportedData(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataFields();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getDataFields()).toStrictEqual(dataFields);
    });
    it('Should add data as Arrays to the dataAsArrays attribute in the redux store', () => {
        //Given I have CSV data as an array
        //When I create an instance of CreateImportedData
        //Then the CreateImportedData should add the data to the dataAsArrays attribute in the redux state
        const createStoreHandler = new CreateImportedData(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual(dataAsArrays);
    });
    it('Should add data as Objects to the dataAsObjects attribute in the redux store', () => {
        //Given I have CSV data as an object
        //When I create an instance of CreateImportedData
        //Then the CreateImportedData should add the data to the dataAsObjects attribute in the redux state
        const createStoreHandler = new CreateImportedData(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getDataAsObjects()).toStrictEqual(dataAsObjects);
    });
});
