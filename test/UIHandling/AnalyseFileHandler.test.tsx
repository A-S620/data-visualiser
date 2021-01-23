import { ImportFilesHandler } from '../../src/UIHandling/ImportFilesHandler';
import { IImportedFile } from '../../src/interfaces/import/IImportedFile';
import GetImportedData from '../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
import ResetImportedData from '../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import ResetAnalysedData from '../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import GetAnalysedData from '../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { AnalyseFileHandler } from '../../src/UIHandling/AnalyseFileHandler';
import { FieldTypes } from '../../src/interfaces/import/IAnalysedFileData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';
const fields = [
    { field: 'col1', fieldType: FieldTypes.INTERVAL },
    { field: 'col2', fieldType: FieldTypes.INTERVAL },
    { field: 'col3', fieldType: FieldTypes.IGNORE },
];
const testCSV2 = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n cool,7,baz';
const testJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
beforeEach(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});

afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
describe('AnalyseFileHandler UI handling component', () => {
    it('should create analysed data', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFile = new AnalyseFileHandler(fields);
        analyseFile.validateAnalysedData();
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().intervalFields).toStrictEqual(['col1', 'col2']);
    });
    it('should reset analysed data data', async () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFile = new AnalyseFileHandler(fields);
        analyseFile.resetAnalysedData();
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().intervalFields).toStrictEqual([]);
    });
    it('should return a notification when all object sizes are not equal', () => {
        const importedFile: IImportedFile = {
            file: testCSV2,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFileErrors = new AnalyseFileHandler(fields).validateAnalysedData();

        expect(analyseFileErrors.notification()).toEqual(
            'One or more of the objects has 1 fields, instead of 2. All other values in that column, on other rows are floats. These object will be ignored'
        );
    });
});
