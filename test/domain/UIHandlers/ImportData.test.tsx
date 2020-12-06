//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Interface Components
import { FileType } from '../../../src/domain/interfaces/IFileType';
//Domain Components
import { ImportData } from '../../../src/domain/UIHandlers/ImportData';

//Store components
import Store from '../../../src/store/Store';
import ResetImportedDataState from '../../../src/domain/ReduxStateHandlers/ImportedDataHandlers/ResetImportedDataState';
//Test Data
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const csvAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const csvAsObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const csvFields = ['col1', 'col2', 'col3'];
const testJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
const jsonAsArrays = [
    ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'],
    ['1', 'Jeanette', 'Penddreth', 'jpenddreth0@census.gov', 'Female', '26.58.193.2'],
];
const jsonAsObjects = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
];
const jsonFields = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];

//Runs before each test
beforeEach(() => {
    const resetImportedDataState = new ResetImportedDataState();
    resetImportedDataState.resetImportedDataState();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedDataState();
    resetImportedDataState.resetImportedDataState();
});
describe('Import Data', () => {
    it('should return file is empty when files are empty', () => {
        //Given I have an import file component
        //When I import an empty file
        //Then I should get an error saying the file is empty

        const importDataNotifications = new ImportData('', FileType.CSV).validate();

        expect(importDataNotifications.notification()).toBe('File is empty');
    });
    it('Should add the CSV file data correctly to the Redux store', () => {
        //Given I have an import file componenet
        //When I import a CSV file
        //Then it should add the file to the redux store correctly

        const importDataNotifications = new ImportData(testCSV, FileType.CSV).validate();
        expect(Store.getState().importedData.dataFields).toStrictEqual(csvFields);
        expect(Store.getState().importedData.dataAsObjects).toStrictEqual(csvAsObjects);
        expect(Store.getState().importedData.dataAsArrays).toStrictEqual(csvAsArrays);
    });
    it('Should add the JSON file data correctly to the Redux store', () => {
        //Given I have an import file componenet
        //When I import a JSON file
        //Then it should add the file to the redux store correctly

        const importDataNotifications = new ImportData(JSON.stringify(testJSON), FileType.JSON).validate();
        expect(Store.getState().importedData.dataFields).toStrictEqual(jsonFields);
        expect(Store.getState().importedData.dataAsObjects).toStrictEqual(jsonAsObjects);
        expect(Store.getState().importedData.dataAsArrays).toStrictEqual(jsonAsArrays);
    });
});
