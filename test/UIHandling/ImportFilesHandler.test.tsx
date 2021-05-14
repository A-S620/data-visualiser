import { ImportFilesHandler } from '../../src/UIHandling/ImportFilesHandler';
import { IImportedFile } from '../../src/Interfaces/import/IImportedFile';
import ResetAnalysedData from '../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import ImportedData from '../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';
const testJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
//Runs before each test
beforeEach(() => {
    new ImportedData().reset();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
//Runs after all test
afterAll(() => {
    new ImportedData().reset();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
describe('ImportFilesHandler UI handling component', () => {
    it('should add data from the imported file to the importedData slice in the store', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFileErrors = new ImportFilesHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('');
    });
    it('should return a notification when the file is not a CSV file', () => {
        const importedFile: IImportedFile = {
            file: JSON.stringify(testJSON),
            fileType: 'application/json',
        };
        const importFileErrors = new ImportFilesHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('File is application/json, only CSV is accepted');
    });
    it('should return a notification when the file is empty', () => {
        const importedFile: IImportedFile = {
            file: '',
            fileType: 'text/csv',
        };
        const importFileErrors = new ImportFilesHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('File is empty');
    });
    it('should create imported data', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        expect(new ImportedData().get().dataFields).toStrictEqual(['col1', 'col2', 'col3']);
    });
});
