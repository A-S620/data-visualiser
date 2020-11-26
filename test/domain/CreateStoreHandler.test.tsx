//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateStoreHandler from '../../src/domain/CreateStoreHandler';
import GetStoreHandler from '../../src/domain/GetStoreHandler';

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
describe('CreateStoreHandler domain componenet', () => {
    const getStoreHandler = new GetStoreHandler();
    it('Should create columns in the Redux State', () => {
        //Given I have columns as an array
        //When I create an instance of CreateStoreHandler
        //Then the CreateStoreHandler should add the columns to the columns variable in the redux state
        const createStoreHandler = new CreateStoreHandler(columns, CSVAsObjects, CSVAsArrays);
        createStoreHandler.createColumns();

        expect(getStoreHandler.getColumns()).toBe(columns);
    });
});
