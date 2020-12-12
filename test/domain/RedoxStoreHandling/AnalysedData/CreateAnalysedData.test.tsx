//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
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
describe('CreateAnalysedData domain component', () => {
    it('Should add integerFields to the integerFields attribute in the analysedData slice', () => {
        //Given I have integerFields as a array
        //When I create an instance of CreateAnalysedData
        //Then the CreateAnalysedData should add the integerFields to the integerFields attribute
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerFields()).toStrictEqual(integerFields);
    });
    it('Should add data as Objects to the integerDataObjects attribute in the analysedData slice', () => {
        //Given I have CSV data as an object
        //When I create an instance of CreateAnalysedData
        //Then the CreateAnalysedData should add the data to the integerDataObjects attribute
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerDataObjects()).toStrictEqual(integerDataObjects);
    });
});
