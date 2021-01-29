//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import GetImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/GetImportedData';
import ResetImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';

//Test Data
const dataArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const dataObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const dataFields = ['col1', 'col2', 'col3'];
const importedData: IImportedFileData = {
    dataFields: dataFields,
    dataObjects: dataObjects,
    dataArrays: dataArrays,
};
describe('ResetImportedData domain component', () => {
    it('Should reset the dataFields attribute in the importedDataState', () => {
        //Given I have field data in the dataField attribute in the importedDataState
        //When I reset the dataFields attribute
        //Then the dataFields attribute should be empty
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataFields();
        const resetStoreHandler = new ResetImportedData();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getImportedData().dataFields).toStrictEqual([]);
    });
    it('Should reset the dataArrays attribute in the importedDataState', () => {
        //Given I have field data in the dataArrays attribute in the importedDataState
        //When I reset the dataArrays attribute
        //Then the dataArrays attribute should be empty
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataAsArrays();
        const resetStoreHandler = new ResetImportedData();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getImportedData().dataArrays).toStrictEqual([]);
    });
    it('Should reset the dataObjects attribute in the importedDataState', () => {
        //Given I have field data in the dataObjects attribute in the importedDataState
        //When I reset the dataObjects attribute
        //Then the dataObjects attribute should be empty
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataAsObjects();
        const resetStoreHandler = new ResetImportedData();
        resetStoreHandler.resetImportedDataState();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getImportedData().dataObjects).toStrictEqual([]);
    });
});
