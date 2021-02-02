import 'jsdom-global/register';
import React from 'react';

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
//Runs before each test
beforeEach(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});
describe('GetImportedData domain component', () => {
    it('Should return the correct dataFields if the getColumns function is called', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataFields();
        const getStoreHandler = new GetImportedData();

        expect(getStoreHandler.getImportedData().dataFields).toStrictEqual(dataFields);
    });
    it('Should return the correct data as arrays if the getDataAsArrays function is called', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataAsArrays();
        const getStoreHandler = new GetImportedData();
        expect(getStoreHandler.getImportedData().dataArrays).toStrictEqual(dataArrays);
    });
    it('Should return the correct dataObjects if the getDataAsObjects function is called', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        const createStoreHandler = new CreateImportedData(importedData);
        createStoreHandler.createDataAsObjects();
        const getStoreHandler = new GetImportedData();

        expect(getStoreHandler.getImportedData().dataObjects).toStrictEqual(dataObjects);
    });
});