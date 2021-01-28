import 'jsdom-global/register';
import { AnalyseNominalData } from '../../../../src/domain/AnalyseFile/DataAnalysis/AnalyseNominalData';
import { IImportedFileData } from '../../../../src/interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';

describe('AnalyseNominalData domain component', () => {
    it('Should add nominal objects correctly', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'bar' },
                { col1: '76', col2: '23', col3: 'tob' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData().nominalDataObjects).toEqual([
            { name: 'foo', count: 1, percent: 25 },
            { name: 'bar', count: 1, percent: 25 },
            { name: 'tob', count: 2, percent: 50 },
        ]);
    });
    it('Should ignore the object without the correct data field', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'bar' },
                { col1: '76', col2: '23' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData().nominalDataObjects).toEqual([
            { name: 'foo', count: 1, percent: 33 },
            { name: 'bar', count: 1, percent: 33 },
            { name: 'tob', count: 1, percent: 33 },
        ]);
    });
    it('Should ignore the object with incorrect data fields', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'bar' },
                { col1: '76', col2: '23', col4: 'bob' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData().nominalDataObjects).toEqual([
            { name: 'foo', count: 1, percent: 33 },
            { name: 'bar', count: 1, percent: 33 },
            { name: 'tob', count: 1, percent: 33 },
        ]);
    });
    it('Should add nominal objects correctly if another field is missing in the object', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col3: 'bar' },
                { col1: '76', col2: '23', col3: 'tob' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData().nominalDataObjects).toEqual([
            { name: 'foo', count: 1, percent: 25 },
            { name: 'bar', count: 1, percent: 25 },
            { name: 'tob', count: 2, percent: 50 },
        ]);
    });
});