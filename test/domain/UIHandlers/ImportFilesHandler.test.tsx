import { ImportFilesHandler } from '../../../src/domain/UIHandlers/ImportFilesHandler';
import { IImportedFile } from '../../../src/domain/interfaces/import/IImportedFile';
import GetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
import ResetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import ResetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';
const testCSV2 = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n cool,7,baz';
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
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
describe('ImportFilesHandler domain component', () => {
    it('should add data from the imported file to the importedData slice in the store', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFileErrors = new ImportFilesHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('');
    });
    it('should return a notification when all object sizes are not equal', () => {
        const importedFile: IImportedFile = {
            file: testCSV2,
            fileType: 'text/csv',
        };
        const importFileErrors = new ImportFilesHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual(
            'One or more of the objects has 1 fields, instead of 2. All other values in that column, on other rows are floats. These object will be ignored'
        );
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
        const getImportedData = new GetImportedData();
        expect(getImportedData.getImportedData().dataFields).toStrictEqual(['col1', 'col2', 'col3']);
    });
    it('should reset imported data', async () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        await importFile.validate();
        importFile.resetImportedData();
        const getImportedData = new GetImportedData();
        expect(getImportedData.getImportedData().dataFields).toStrictEqual([]);
    });
    it('should create analysed data', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().integerFields).toStrictEqual(['col1', 'col2']);
    });
    it('should reset analysed data data', async () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        await importFile.validate();
        importFile.resetAnalysedData();
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().integerFields).toStrictEqual([]);
    });
});
