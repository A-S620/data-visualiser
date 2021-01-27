import 'jsdom-global/register';
import ResetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { IImportedFile } from '../../../src/interfaces/import/IImportedFile';
import { ImportFileData } from '../../../src/domain/ImportedFile/ImportFileData';
import { FieldTypes } from '../../../src/interfaces/import/IAnalysedFileData';
import { AnalyseFileData } from '../../../src/domain/ImportedFile/AnalyseFileData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import CreateImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../src/interfaces/import/IImportedFileData';

//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';

const fields = [
    { field: 'col1', fieldType: FieldTypes.INTERVAL },
    { field: 'col2', fieldType: FieldTypes.INTERVAL },
    { field: 'col3', fieldType: FieldTypes.IGNORE },
];

beforeEach(() => {
    const importedFileData: IImportedFileData = {
        dataAsArrays: [
            ['col1', 'col2', 'col3'],
            [' 1', '3', 'foo'],
            [' 2', '5', 'bar'],
            ['c-1', '7', 'baz'],
        ],
        dataAsObjects: [
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
        ],
        dataFields: ['col1', 'col2', 'col3'],
    };
    const createImportedData = new CreateImportedData(importedFileData);
    createImportedData.createDataAsObjects();
    createImportedData.createDataFields();
});
//Runs after all test
afterAll(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});

describe('AnalyseFileData domain component', () => {
    it('Should create the fields, interval fields and intervalDataAsObjects in the analysedData slice', () => {
        const analyseFileData = new AnalyseFileData(fields);
        analyseFileData.validateAnalysedData();
        const getAnalysedData = new GetAnalysedData().getAnalysedData();
        expect(getAnalysedData.fields).toEqual(fields);
        expect(getAnalysedData.intervalFields).toEqual(['col1', 'col2']);
        expect(getAnalysedData.intervalDataObjects).toEqual([
            { col1: 1, col2: 3 },
            { col1: 2, col2: 5 },
        ]);
    });
});
