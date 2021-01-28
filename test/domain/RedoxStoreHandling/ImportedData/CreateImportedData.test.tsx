import 'jsdom-global/register';
import React from 'react';

import CreateImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import GetImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
import ResetImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';

import { IImportedFileData } from '../../../../src/interfaces/import/IImportedFileData';

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

beforeEach(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});

afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});
describe('CreateImportedData domain component', () => {
    it('Should add dataFields to the dataFields attribute in the Redux State', () => {
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
    it('Should add data as Arrays to the dataArrays attribute in the redux store', () => {
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
    it('Should add data as Objects to the dataObjects attribute in the redux store', () => {
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
