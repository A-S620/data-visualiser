//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import {addIntegerDataArrays} from "../../../../src/ReduxStore/Actions/ReducerActions";

//Test Data
const integerFields = ['col1', 'col2', 'col3'];
const integerDataArrays = [
    ['col1', 'col2'],
    [33, 43],
    [9, 3],
    [6, 7],
];
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
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects, integerDataArrays);
        createStoreHandler.createIntegerFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerFields()).toStrictEqual([]);
    });
    it('Should reset the data as arrays attribute in the analysedData slice', () => {
        //Given I have field data in the dataAsArrays attribute in the analysedData slice
        //When I reset the dataAsArrays attribute
        //Then the dataAsArrays attribute should be empty
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects, addIntegerDataArrays());
        createStoreHandler.createIntegerDataArrays();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerDataArrays()).toStrictEqual([]);
    });
    it('Should reset the dataAsObjects attribute in the analysedData slice', () => {
        //Given I have field data in the dataAsObjects attribute in the analysedData slice
        //When I reset the dataAsObjects attribute
        //Then the dataAsObjects attribute should be empty
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects, addIntegerDataArrays());
        createStoreHandler.createIntegerDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getIntegerDataObjects()).toStrictEqual([]);
    });
});
