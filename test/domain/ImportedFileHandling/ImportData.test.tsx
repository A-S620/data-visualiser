import 'jsdom-global/register';

import { ImportFileData } from '../../../src/domain/ImportedFileHandling/ImportFileData';

import { store } from '../../../src/ReduxStore/store';
import ResetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { IImportedFile } from '../../../src/domain/interfaces/IImportedFile';
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
describe('Import Data', () => {
    it('should return file is empty when files are empty', () => {
        const importedFile: IImportedFile = {
            file: '',
            fileType: 'text/csv',
        };
        const importData = new ImportFileData(importedFile);
        expect(importData.validate().notification()).toBe('File is empty');
    });
    it('Should add the CSV file data correctly to the Redux store', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importData = new ImportFileData(importedFile);
        importData.validate();
        expect(store.getState().importedData.dataFields).toStrictEqual(csvFields);
        expect(store.getState().importedData.dataAsObjects).toStrictEqual(csvAsObjects);
        expect(store.getState().importedData.dataAsArrays).toStrictEqual(csvAsArrays);
    });
});
