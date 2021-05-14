import 'jsdom-global/register';

import { AnalyseIntervalData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseIntervalData';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

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
        new ImportedData().create(testData);
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
        new ImportedData().create(testData);
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
        new ImportedData().create(testData);
        const analyseIntervalData = new AnalyseIntervalData(['col1', 'col2']);
        expect(analyseIntervalData.validateIntervalData()).toStrictEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
});
