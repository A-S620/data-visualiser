//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/CreateImportedDataState';
import GetImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/GetImportedDataState';
import ResetImportedDataState from '../../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/ResetImportedDataState';

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
describe('ResetImportedDataState domain component', () => {
    it('Should reset the dataFields attribute in the importedDataState', () => {
        //Given I have field data in the dataField attribute in the importedDataState
        //When I reset the dataFields attribute
        //Then the dataFields attribute should be empty
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataFields();
        const resetStoreHandler = new ResetImportedDataState();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataFields()).toStrictEqual([]);
    });
    it('Should reset the dataAsArrays attribute in the importedDataState', () => {
        //Given I have field data in the dataAsArrays attribute in the importedDataState
        //When I reset the dataAsArrays attribute
        //Then the dataAsArrays attribute should be empty
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsArrays();
        const resetStoreHandler = new ResetImportedDataState();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataAsArrays()).toStrictEqual([]);
    });
    it('Should reset the dataAsObjects attribute in the importedDataState', () => {
        //Given I have field data in the dataAsObjects attribute in the importedDataState
        //When I reset the dataAsObjects attribute
        //Then the dataAsObjects attribute should be empty
        const createStoreHandler = new CreateImportedDataState(dataFields, dataAsObjects, dataAsArrays);
        createStoreHandler.createDataAsObjects();
        const resetStoreHandler = new ResetImportedDataState();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedDataState();
        expect(getStoreHandler.getDataAsObjects()).toStrictEqual([]);
    });
});
