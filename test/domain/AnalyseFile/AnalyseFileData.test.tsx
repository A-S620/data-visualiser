import 'jsdom-global/register';
import ResetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { FieldTypes } from '../../../src/interfaces/Analyse/IAnalysedFileData';
import { AnalyseFileData } from '../../../src/domain/AnalyseFile/AnalyseFileData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import CreateImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../src/interfaces/import/IImportedFileData';

beforeEach(() => {
    const importedFileData: IImportedFileData = {
        dataArrays: [
            ['col1', 'col2', 'col3'],
            [' 1', '3', 'foo'],
            [' 2', '5', 'bar'],
            ['c-1', '7', 'baz'],
        ],
        dataObjects: [
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
afterEach(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
});

describe('AnalyseFileData domain component', () => {
    it('Should create the fields slice', () => {
        const analyseFileData = new AnalyseFileData([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ]);
        analyseFileData.validateAnalysedData();
        const getAnalysedData = new GetAnalysedData().getAnalysedData();
        expect(getAnalysedData.fields).toEqual([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ]);
    });
    describe('Analyse Interval Data', () => {
        it('Should create the interval fields analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.intervalFields).toEqual(['col1', 'col2']);
        });
        it('Should create the intervalDataObjects in the analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.intervalDataObjects).toEqual([
                { col1: 1, col2: 3 },
                { col1: 2, col2: 5 },
            ]);
        });
    });
    describe('Analyse nominal data', () => {
        it('Should create the nominal fields analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.nominalFields).toEqual(['col3']);
        });
        it('Should create the nominalDataObjects in the analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.nominalDataObjects).toEqual([
                { name: 'foo', count: 1, percent: 33 },
                { name: 'bar', count: 1, percent: 33 },
                { name: 'baz', count: 1, percent: 33 },
            ]);
        });
    });
    describe('No data created in analysedData slice', () => {
        it('Should not create any data, other than fields in analysedData', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.IGNORE },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.fields).toEqual([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.IGNORE },
            ]);
            expect(getAnalysedData.intervalFields).toEqual([]);
            expect(getAnalysedData.intervalDataObjects).toEqual([]);
            expect(getAnalysedData.nominalFields).toEqual([]);
            expect(getAnalysedData.nominalDataObjects).toEqual([]);
        });
    });
});
