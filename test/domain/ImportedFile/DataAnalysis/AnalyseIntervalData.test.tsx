import 'jsdom-global/register';

import { AnalyseIntervalData } from '../../../../src/domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import CreateImportedData from '../../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../../src/interfaces/import/IImportedFileData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

//Test data
const dataAsObjects = [
    { col1: '32', col2: '45', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];
const intervalFields = ['col1', 'col2'];
const dataAsObjects2 = [
    { col1: '32', col2: 'cool', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields2 = ['col1', 'col2', 'col3'];
const intervalFields2 = ['col1', 'col2'];
describe('AnalyseIntervalData domain component', () => {
    it('should return a notification when all object sizes are not equal', () => {
        const testData: IImportedFileData = {
            dataFields: dataFields2,
            dataAsObjects: dataAsObjects2,
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIntervalData(intervalFields2);
        const notifications = analyseData.validateIntervalData();
        expect(notifications.notification()).toEqual(
            'One or more of the objects has 1 fields, instead of 2. All other values in that column, on other rows are floats. These object will be ignored'
        );
    });
    it('should add the correct objects, if one of the objects has the wrong length', () => {
        const testData: IImportedFileData = {
            dataFields: dataFields2,
            dataAsObjects: dataAsObjects2,
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIntervalData(intervalFields2);
        analyseData.validateIntervalData();
        expect(analyseData.getAnalysedIntervalData().intervalDataAsObjects).toStrictEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('should not accept IP addresses as intervals', () => {
        const testData: IImportedFileData = {
            dataFields: dataFields2,
            dataAsObjects: [
                { col1: '32', col2: '21.31.54', col3: 'foo' },
                { col1: '79', col2: '5', col3: 'foo' },
                { col1: '76', col2: '23', col3: 'foo' },
            ],
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseIntervalData(intervalFields2);
        analyseData.validateIntervalData();
        expect(analyseData.getAnalysedIntervalData().intervalDataAsObjects).toStrictEqual([
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
});
