import 'jsdom-global/register';

import { AnalyseFileData } from '../../../src/domain/ImportedFileHandling/AnalyseFileData';
import CreateImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { IImportedFileData } from '../../../src/domain/interfaces/IImportedFileData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

//Test data
const dataAsObjects = [
    { col1: '32', col2: '45', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];
const dataAsObjects2 = [
    { col1: '32', col2: 'cool', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields2 = ['col1', 'col2', 'col3'];
const dataWithoutFloats = [
    {
        id: '1',
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
];
const dataWithoutFloatsFields = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
describe('Analyse Data', () => {
    it('Should return a notification when there are no integer fields in the data', () => {
        const testData: IImportedFileData = {
            dataFields: dataWithoutFloatsFields,
            dataAsObjects: dataWithoutFloats,
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseFileData();
        const notifications = analyseData.validate();
        expect(notifications.notification()).toEqual(
            "Imported Data doesn't contain more than 2 integer fields, so it cannot be visualised"
        );
    });
    it('Should not return a notification when there 2 or more integer fields in the data', () => {
        const testData: IImportedFileData = {
            dataFields: dataFields,
            dataAsObjects: dataAsObjects,
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseFileData();
        const notifications = analyseData.validate();
        expect(notifications.notification()).toEqual('');
    });
    it('should return a notification when all object sizes are not equal', () => {
        const testData: IImportedFileData = {
            dataFields: dataFields2,
            dataAsObjects: dataAsObjects2,
            dataAsArrays: [],
        };
        const createImportedData = new CreateImportedData(testData);
        createImportedData.createDataFields();
        createImportedData.createDataAsObjects();
        const analyseData = new AnalyseFileData();
        const notifications = analyseData.validate();
        expect(notifications.notification()).toEqual(
            'One of the objects has 1 fields, instead of 2. All other values in that column, on other rows are floats. This object will be ignored'
        );
    });
});
