//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Componenets
import CreateImportedDataStore from '../../../src/domain/StoreHandlers/CreateImportedDataStore';
import GetImportedDataStore from '../../../src/domain/StoreHandlers/GetImportedDataStore';

//Store components
import { store } from '../../../src/store/store';

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
describe('GetImportedDataStore domain component', () => {
    it('Should return the correct dataFields if the getColumns function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getColumns from an instance of GetImportedDataStore
        //Then it should return the correct dataFields
        const createStoreHandler = new CreateImportedDataStore(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataFields();
        const getStoreHandler = new GetImportedDataStore();

        expect(getStoreHandler.getDataFields()).toStrictEqual(dataFields);
    });
    it('Should return the correct data as arrays if the getDataAsArrays function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getDataAsArrays from an instance of GetImportedDataStore
        //Then it should return the correct data as arrays
        const createStoreHandler = new CreateImportedDataStore(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetImportedDataStore();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual(dataAsArrays);
    });
    it('Should return the correct dataFields if the getDataAsObjects function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getDataAsObjects from an instance of GetImportedDataStore
        //Then it should return the correct data as objects
        const createStoreHandler = new CreateImportedDataStore(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetImportedDataStore();

        expect(getStoreHandler.getDataAsObjects()).toStrictEqual(dataAsObjects);
    });
});
