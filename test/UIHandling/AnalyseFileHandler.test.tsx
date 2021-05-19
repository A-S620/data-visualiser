import { ImportFilesHandler } from '../../src/UIHandling/ImportFilesHandler';
import { IImportedFile } from '../../src/Interfaces/import/IImportedFile';
import ResetAnalysedData from '../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import GetAnalysedData from '../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { AnalyseFileHandler } from '../../src/UIHandling/AnalyseFileHandler';
import { FieldTypes } from '../../src/Interfaces/Analyse/IAnalysedFileData';
import ImportedData from '../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';
const fields = [
    { field: 'col1', fieldType: FieldTypes.INTERVAL },
    { field: 'col2', fieldType: FieldTypes.INTERVAL },
    { field: 'col3', fieldType: FieldTypes.IGNORE },
];
const testCSV2 = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n cool,7,baz';
beforeEach(() => {
    new ImportedData().reset();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});

afterAll(() => {
    new ImportedData().reset();
    const resetAnalysedDataState = new ResetAnalysedData();
    resetAnalysedDataState.resetAnalysedData();
});
describe('AnalyseFileHandler UI handling component', () => {
    it('Should return an error if fields dont match imported columns', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFile = new AnalyseFileHandler();
        expect(
            analyseFile
                .validateAnalysedData([
                    { field: 'col1', fieldType: FieldTypes.INTERVAL },
                    { field: 'col2', fieldType: FieldTypes.INTERVAL },
                ])
                .notification()
        ).toBe('Field types have not been selected for all fields');
    });
    it('should create analysed data', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFile = new AnalyseFileHandler();
        analyseFile.validateAnalysedData(fields);
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().intervalFields).toStrictEqual(['col1', 'col2']);
    });
    it('should reset analysed data slice', async () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFile = new AnalyseFileHandler();
        analyseFile.resetAnalysedData();
        const getAnalysedData = new GetAnalysedData();
        expect(getAnalysedData.getAnalysedData().intervalFields).toStrictEqual([]);
    });
    it('should not return a notification when all object sizes are not equal', () => {
        const importedFile: IImportedFile = {
            file: testCSV2,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile);
        importFile.validate();
        const analyseFileErrors = new AnalyseFileHandler().validateAnalysedData(fields);

        expect(analyseFileErrors.notification()).toEqual('');
    });
});
