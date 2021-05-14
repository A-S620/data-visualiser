import 'jsdom-global/register';
import { AnalyseNominalData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseNominalData';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

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
        new ImportedData().create(testData);
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData()).toEqual([
            {
                col3: [
                    { name: 'foo', count: 1, percent: 25 },
                    { name: 'bar', count: 1, percent: 25 },
                    { name: 'tob', count: 2, percent: 50 },
                ],
            },
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
        new ImportedData().create(testData);
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData()).toEqual([
            {
                col3: [
                    { name: 'foo', count: 1, percent: 33 },
                    { name: 'bar', count: 1, percent: 33 },
                    { name: 'tob', count: 1, percent: 33 },
                ],
            },
        ]);
    });
    it('Should ignore the object with incorrect data fields', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'bar' },
                { col1: '76', col2: '23', col4: 'tob' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData()).toEqual([
            {
                col3: [
                    { name: 'foo', count: 1, percent: 33 },
                    { name: 'bar', count: 1, percent: 33 },
                    { name: 'tob', count: 1, percent: 33 },
                ],
            },
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
        new ImportedData().create(testData);
        const analyseNominalData = new AnalyseNominalData(['col3']);
        expect(analyseNominalData.validateNominalData()).toEqual([
            {
                col3: [
                    { name: 'foo', count: 1, percent: 25 },
                    { name: 'bar', count: 1, percent: 25 },
                    { name: 'tob', count: 2, percent: 50 },
                ],
            },
        ]);
    });
    it('Should be empty if there are no nominal fields', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'yes' },
                { col1: '79', col3: 'yes' },
                { col1: '76', col2: '23', col3: 'no' },
                { col1: '7', col2: '3', col3: 'no' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseData = new AnalyseNominalData([]);
        expect(analyseData.validateNominalData()).toEqual([]);
    });
});
