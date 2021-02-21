import 'jsdom-global/register';
import ResetImportedData from '../../../src/Domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { FieldTypes } from '../../../src/Interfaces/Analyse/IAnalysedFileData';
import { AnalyseFileData } from '../../../src/Domain/AnalyseFile/AnalyseFileData';
import GetAnalysedData from '../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import CreateImportedData from '../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../src/Interfaces/import/IImportedFileData';

beforeEach(() => {
    const importedFileData: IImportedFileData = {
        dataArrays: [
            ['col1', 'col2', 'col3', 'col4'],
            ['1', '3', 'foo', 'yes'],
            ['2', '5', 'bar', 'no'],
            ['c-1', '7', 'baz', 'yes'],
        ],
        dataObjects: [
            { col1: '1', col2: '3', col3: 'foo', col4: 'yes' },
            { col1: '2', col2: '5', col3: 'bar', col4: 'no' },
            { col1: 'c-1', col2: '7', col3: 'baz', col4: 'yes' },
        ],
        dataFields: ['col1', 'col2', 'col3', 'col4'],
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
            { field: 'col4', fieldType: FieldTypes.BINARY },
        ]);
        analyseFileData.validateAnalysedData();
        const getAnalysedData = new GetAnalysedData().getAnalysedData();
        expect(getAnalysedData.fields).toEqual([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.BINARY },
        ]);
    });
    describe('Analyse Interval Data', () => {
        it('Should create the interval fields analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
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
                { field: 'col4', fieldType: FieldTypes.BINARY },
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
                { field: 'col4', fieldType: FieldTypes.BINARY },
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
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.nominalDataObjects).toEqual([
                {
                    col3: [
                        { name: 'foo', count: 1, percent: 33 },
                        { name: 'bar', count: 1, percent: 33 },
                        { name: 'baz', count: 1, percent: 33 },
                    ],
                },
            ]);
        });
    });
    describe('Analyse Binary Data', () => {
        it('Should create the binary fields analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.binaryFields).toEqual(['col4']);
        });
        it('Should create the binaryDataObjects in the analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.binaryDataObjects).toEqual([
                {
                    col4: [
                        { name: 'yes', count: 2, percent: 67 },
                        { name: 'no', count: 1, percent: 33 },
                    ],
                },
            ]);
        });
    });
    describe('Analyse Ignore Data', () => {
        it('Should create the ignore fields analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.ignoreFields).toEqual(['col1', 'col2']);
        });
        it('Should create the ignoreDataObjects in the analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.ignoreDataObjects).toEqual([
                { col1: '1', col2: '3' },
                { col1: '2', col2: '5' },
                { col1: 'c-1', col2: '7' },
            ]);
        });
    });
    describe('Analyse ordinal data', () => {
        it('Should create the ordinal fields in analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.ORDINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.ordinalFields).toEqual(['col3']);
        });
        it('Should create the ordinalDataObjects in the analysedData slice', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.ORDINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.ordinalDataObjects).toEqual([
                {
                    col3: [
                        { name: 'foo', count: 1, percent: 33 },
                        { name: 'bar', count: 1, percent: 33 },
                        { name: 'baz', count: 1, percent: 33 },
                    ],
                },
            ]);
        });
    });
    describe('No data created in analysedData slice', () => {
        it('Should not create any data, other than fields in analysedData', () => {
            const analyseFileData = new AnalyseFileData([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.IGNORE },
                { field: 'col4', fieldType: FieldTypes.IGNORE },
            ]);
            analyseFileData.validateAnalysedData();
            const getAnalysedData = new GetAnalysedData().getAnalysedData();
            expect(getAnalysedData.fields).toEqual([
                { field: 'col1', fieldType: FieldTypes.IGNORE },
                { field: 'col2', fieldType: FieldTypes.IGNORE },
                { field: 'col3', fieldType: FieldTypes.IGNORE },
                { field: 'col4', fieldType: FieldTypes.IGNORE },
            ]);
            expect(getAnalysedData.intervalFields).toEqual([]);
            expect(getAnalysedData.intervalDataObjects).toEqual([]);
            expect(getAnalysedData.nominalFields).toEqual([]);
            expect(getAnalysedData.nominalDataObjects).toEqual([]);
        });
    });
});
