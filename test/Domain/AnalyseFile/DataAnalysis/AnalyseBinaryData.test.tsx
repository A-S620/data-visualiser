import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseBinaryData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseBinaryData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
afterEach(() => {
    new ImportedData().reset();
});
describe('AnalyseBinaryData domain component', () => {
    it('Should add binary objects correctly ', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'yes', col4: 'true' },
                { col1: '79', col2: '5', col3: 'no', col4: 'true' },
                { col1: '76', col2: '23', col3: 'yes', col4: 'false' },
                { col1: '7', col2: '3', col3: 'no', col4: 'false' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseData = new AnalyseBinaryData(['col3', 'col4']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        name: 'yes',
                        count: 2,
                        percent: 50,
                    },
                    {
                        name: 'no',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
            {
                col4: [
                    {
                        name: 'true',
                        count: 2,
                        percent: 50,
                    },
                    {
                        name: 'false',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
        ]);
    });
    it('Should ignore the object without the correct data field', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'no' },
                { col1: '79', col2: '5', col3: 'no' },
                { col1: '76', col2: '23' },
                { col1: '7', col2: '3', col3: 'yes' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        name: 'no',
                        count: 2,
                        percent: 67,
                    },
                    {
                        name: 'yes',
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
                { col1: '32', col2: 'cool', col3: 'yes' },
                { col1: '79', col2: '5', col3: 'yes' },
                { col1: '76', col2: '23', col4: 'no' },
                { col1: '7', col2: '3', col3: 'no' },
            ],
            dataArrays: [],
        };
        new ImportedData().create(testData);
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        name: 'yes',
                        count: 2,
                        percent: 67,
                    },
                    {
                        name: 'no',
                        count: 1,
                        percent: 33,
                    },
                ],
            },
        ]);
    });
    it('Should add binary objects correctly if another field is missing in the object', () => {
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
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        name: 'yes',
                        count: 2,
                        percent: 50,
                    },
                    {
                        name: 'no',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
        ]);
    });
    it('Should be empty if there are no binary fields', () => {
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
        const analyseData = new AnalyseBinaryData([]);
        expect(analyseData.validateBinaryData()).toEqual([]);
    });
});
