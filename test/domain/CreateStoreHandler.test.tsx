//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateStoreHandler from '../../src/domain/CreateStoreHandler';

//Test Data
const TestCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
describe('CreateStoreHandler domain componenet', () => {
    it('Should create columns in the Redux State', () => {
        //Given I have columns as an array
        //When I create an instance of CreateStoreHandler
        //Then the CreateStoreHandler should add teh columns to the columns variable in the redux state
    });
});
