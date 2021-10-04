import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseOrdinalData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseOrdinalData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

afterEach(() => {
    new ImportedData().reset();
});
describe('AnalyseOrdinalData domain component', () => {
    it('Should add ordinal objects correctly', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo', col4: '10-15' },
                { col1: '79', col2: '5', col3: 'bar', col4: '15-20' },
                { col1: '76', col2: '23', col3: 'tob', col4: '15-20' },
                { col1: '7', col2: '3', col3: 'tob', col4: '30-35' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseOrdinalData = new AnalyseOrdinalData(['col3', 'col4']);
        expect(analyseOrdinalData.validateOrdinalData()).toEqual([
            {
                col3: [
                    {
                        name: 'foo',
                        count: 1,
                        percent: 25,
                    },
                    {
                        name: 'bar',
                        count: 1,
                        percent: 25,
                    },

                    {
                        name: 'tob',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
            {
                col4: [
                    {
                        name: '10-15',
                        count: 1,
                        percent: 25,
                    },
                    {
                        name: '15-20',
                        count: 2,
                        percent: 50,
                    },
                    {
                        name: '30-35',
                        count: 1,
                        percent: 25,
                    },
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
        const analyseOrdinalData = new AnalyseOrdinalData(['col3']);
        expect(analyseOrdinalData.validateOrdinalData()).toEqual([
            {
                col3: [
                    {
                        name: 'foo',
                        count: 1,
                        percent: 33,
                    },
                    {
                        name: 'bar',
                        count: 1,
                        percent: 33,
                    },
                    {
                        name: 'tob',
                        count: 1,
                        percent: 33,
                    },
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
                { col1: '76', col2: '23', col4: 'bar' },
                { col1: '7', col2: '3', col3: 'tob' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseOrdinalData = new AnalyseOrdinalData(['col3']);
        expect(analyseOrdinalData.validateOrdinalData()).toEqual([
            {
                col3: [
                    {
                        name: 'foo',
                        count: 1,
                        percent: 33,
                    },
                    {
                        name: 'bar',
                        count: 1,
                        percent: 33,
                    },
                    {
                        name: 'tob',
                        count: 1,
                        percent: 33,
                    },
                ],
            },
        ]);
    });
    it('Should add ordinal objects correctly if another field is missing in the object', () => {
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
        const analyseOrdinalData = new AnalyseOrdinalData(['col3']);
        expect(analyseOrdinalData.validateOrdinalData()).toEqual([
            {
                col3: [
                    {
                        name: 'foo',
                        count: 1,
                        percent: 25,
                    },
                    {
                        name: 'bar',
                        count: 1,
                        percent: 25,
                    },
                    {
                        name: 'tob',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
        ]);
    });
    it('Should be empty if there are no ordinal fields', () => {
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
        const analyseData = new AnalyseOrdinalData([]);
        expect(analyseData.validateOrdinalData()).toEqual([]);
    });
});