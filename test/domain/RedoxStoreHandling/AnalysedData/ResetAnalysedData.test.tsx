//Imports from libraries
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
describe('ResetImportedData domain component', () => {
    it('Should reset the integerFields attribute in the analysedData slice', () => {
        //Given I have field data in the integerFields attribute in the analaysedData slice
        //When I reset the integerFields attribute
        //Then the integerFields attribute should be empty
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerFields()).toStrictEqual([]);
    });

    it('Should reset the dataAsObjects attribute in the analysedData slice', () => {
        //Given I have field data in the dataAsObjects attribute in the analysedData slice
        //When I reset the dataAsObjects attribute
        //Then the dataAsObjects attribute should be empty
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerDataObjects()).toStrictEqual([]);
    });
});
