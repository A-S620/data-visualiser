//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateStoreHandler from '../../../src/domain/StoreHandlers/CreateStoreHandler';
import GetStoreHandler from '../../../src/domain/StoreHandlers/GetStoreHandler';

//Store components
import { store } from '../../../src/store/store';

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
describe('CreateStoreHandler domain component', () => {
    it('Should add columns to the columns attribute in the Redux State', () => {
        //Given I have columns as a array
        //When I create an instance of CreateStoreHandler
        //Then the CreateStoreHandler should add the columns to the columns attribute in the redux state
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createColumns();
        const getStoreHandler = new GetStoreHandler();
        expect(getStoreHandler.getColumns()).toStrictEqual(columns);
    });
    it('Should add CSV as Arrays to the dataAsArrays attribute in the redux store', () => {
        //Given I have CSV data as an array
        //When I create an instance of CreateStoreHandler
        //Then the CreateStoreHandler should add the data to the dataAsArrays attribute in the redux state
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetStoreHandler();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual(CSVAsArrays);
    });
    it('Should add CSV as Objects to the dataAsObjects attribute in the redux store', () => {
        //Given I have CSV data as an object
        //When I create an instance of CreateStoreHandler
        //Then the CreateStoreHandler should add the data to the dataAsObjects attribute in the redux state
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetStoreHandler();
        expect(getStoreHandler.getDataAsObjects()).toStrictEqual(CSVAsObjects);
    });
});
