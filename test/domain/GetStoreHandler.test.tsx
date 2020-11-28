//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Componenets
import CreateStoreHandler from '../../src/domain/CreateStoreHandler';
import GetStoreHandler from '../../src/domain/GetStoreHandler';

//Store components
import { store } from '../../src/store/store';

//Test Data
const TestCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const CSVAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const CSVAsObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const columns = ['col1', 'col2', 'col3'];
describe('GetStoreHandler domain component', () => {
    it('Should return the correct columns if the getColumns function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getColumns from an instance of GetStoreHandler
        //Then it should return the correct columns
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createColumns();
        const getStoreHandler = new GetStoreHandler();

        expect(getStoreHandler.getColumns()).toStrictEqual(columns);
    });
    it('Should return the correct data as arrays if the getDataAsArrays function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getDataAsArrays from an instance of GetStoreHandler
        //Then it should return the correct data as arrays
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetStoreHandler();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual(CSVAsArrays);
    });
    it('Should return the correct columns if the getDataAsObjects function is called', () => {
        //Given I have created data in the redux store
        //When I run the function getDataAsObjects from an instance of GetStoreHandler
        //Then it should return the correct data as objects
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetStoreHandler();

        expect(getStoreHandler.getDataAsObjects()).toStrictEqual(CSVAsObjects);
    });
});
