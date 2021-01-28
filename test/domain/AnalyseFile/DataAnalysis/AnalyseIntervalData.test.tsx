import 'jsdom-global/register';

import { AnalyseIntervalData } from '../../../../src/domain/AnalyseFile/DataAnalysis/AnalyseIntervalData';
import CreateImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../../src/interfaces/import/IImportedFileData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

describe('AnalyseIntervalData domain component', () => {
    it('should add the interval objects correctly', () => {
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
        const analyseIntervalData = new AnalyseIntervalData(['col1', 'col2']);
        expect(analyseIntervalData.validateIntervalData()).toEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('should add the correct objects, if one of the objects has the wrong length', () => {
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
        const analyseIntervalData = new AnalyseIntervalData(['col1', 'col2']);
        expect(analyseIntervalData.validateIntervalData()).toStrictEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('should not accept IP addresses as intervals', () => {
        const testData: IImportedFileData = {
            dataFields: ['col1', 'col2', 'col3'],
            dataObjects: [
                { col1: '32', col2: '21.31.54', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'foo' },
                { col1: '76', col2: '23', col3: 'foo' },
            ],
            dataArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseIntervalData = new AnalyseIntervalData(['col1', 'col2']);
        expect(analyseIntervalData.validateIntervalData()).toStrictEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
});
