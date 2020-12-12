//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Componenets
import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
//Store components

//Test Data
const integerFields = ['col1', 'col2', 'col3'];

const integerDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
//Runs before each test
beforeEach(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
//Runs after all test
afterAll(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('ResetAnalysedData domain component', () => {
    it('Should return the correct integerFields if the getIntegerFields method is called', () => {
        //Given I have created data in the redux store
        //When I run the function getIntegerFields from an instance of GetAnalysedData
        //Then it should return the correct integerFields
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getIntegerFields()).toStrictEqual(integerFields);
    });

    it('Should return the correct data as objects if the getIntegerDataObjects method is called', () => {
        //Given I have created data in the redux store
        //When I run the function getIntegerDataObjects from an instance of GetAnalysedData
        //Then it should return the correct data as objects
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerDataObjects();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getIntegerDataObjects()).toStrictEqual(integerDataObjects);
    });
});
