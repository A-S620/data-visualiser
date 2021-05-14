import 'jsdom-global/register';

import { ImportFileData } from '../../../src/Domain/ImportFile/ImportFileData';

import { IImportedFile } from '../../../src/Interfaces/import/IImportedFile';
import ImportedData from '../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const invalidCSV = 'col1,,col2,col3\n,foo\n 2,5,bar\nc-1,7,baz';
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
    new ImportedData().reset();
});
//Runs after all test
afterAll(() => {
    new ImportedData().reset();
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
    it('should return wrong file type error', () => {
        const importedFile: IImportedFile = {
            file: 'test',
            fileType: 'application/json',
        };
        const importData = new ImportFileData(importedFile);
        expect(importData.validate().notification()).toBe('File is application/json, only CSV is accepted');
    });
    it('should return a CSV processing error', () => {
        const importedFile: IImportedFile = {
            file: invalidCSV,
            fileType: 'text/csv',
        };
        const importData = new ImportFileData(importedFile);
        expect(importData.validate().notification()).toBe(
            'FieldMismatch: Too few fields: expected 4 fields but parsed 2, Row: 0, FieldMismatch: Too few fields: expected 4 fields but parsed 3, Row: 1, FieldMismatch: Too few fields: expected 4 fields but parsed 3, Row: 2'
        );
    });
    it('Should add the CSV file data correctly to the Redux store', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importData = new ImportFileData(importedFile);
        importData.validate();
        expect(importData.getImportedData().dataFields).toStrictEqual(csvFields);
        expect(importData.getImportedData().dataObjects).toStrictEqual(csvAsObjects);
        expect(importData.getImportedData().dataArrays).toStrictEqual(csvAsArrays);
    });
});
