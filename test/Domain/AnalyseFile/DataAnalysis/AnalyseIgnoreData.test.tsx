import 'jsdom-global/register';

import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseIgnoreData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseIgnoreData';

describe('AnalyseIgnoreData domain component', () => {
    it('should add the ignore objects correctly', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: 'cool', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'foo' },
                { col1: '76', col2: '23', col3: 'foo' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIgnoreData(['col1', 'col2']);
        expect(analyseData.validateIgnoreData()).toEqual([
            { col1: '32', col2: 'cool' },
            { col1: '79', col2: '5' },
            { col1: '76', col2: '23' },
        ]);
    });
    it('should add the ignore objects correctly, if one of the fields is missing', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'foo' },
                { col1: '76', col2: '23', col3: 'foo' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIgnoreData(['col1', 'col2']);
        expect(analyseData.validateIgnoreData()).toEqual([
            { col1: '32' },
            { col1: '79', col2: '5' },
            { col1: '76', col2: '23' },
        ]);
    });
    it('should not add any objects if ignore fields are empty', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'foo' },
                { col1: '76', col2: '23', col3: 'foo' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIgnoreData([]);
        expect(analyseData.validateIgnoreData()).toEqual([]);
    });
});
