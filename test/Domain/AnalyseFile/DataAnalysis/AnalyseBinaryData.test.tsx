import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseBinaryData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseBinaryData';
import ResetImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ResetImportedData';
afterEach(() => {
    const resetData = new ResetImportedData();
    resetData.resetImportedDataState();
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
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseBinaryData(['col3', 'col4']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        value: 'yes',
                        count: 2,
                        percent: 50,
                    },
                    {
                        value: 'no',
                        count: 2,
                        percent: 50,
                    },
                ],
            },
            {
                col4: [
                    {
                        value: 'true',
                        count: 2,
                        percent: 50,
                    },
                    {
                        value: 'false',
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
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        value: 'no',
                        count: 2,
                        percent: 67,
                    },
                    {
                        value: 'yes',
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
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        value: 'yes',
                        count: 2,
                        percent: 67,
                    },
                    {
                        value: 'no',
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
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseBinaryData(['col3']);
        expect(analyseData.validateBinaryData()).toEqual([
            {
                col3: [
                    {
                        value: 'yes',
                        count: 2,
                        percent: 50,
                    },
                    {
                        value: 'no',
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
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseBinaryData([]);
        expect(analyseData.validateBinaryData()).toEqual([]);
    });
});
