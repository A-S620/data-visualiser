import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseOrdinalData } from '../../../../src/Domain/AnalyseFile/DataAnalysis/AnalyseOrdinalData';

describe('AnalyseOrdinalData domain component', () => {
    it('Should add ordinal objects correctly', () => {
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
        const analyseOrdinalData = new AnalyseOrdinalData(['col3']);
        expect(analyseOrdinalData.validateOrdinalData()).toEqual('');
    });
    it('Should ignore the object without the correct data field', () => {});
    it('Should ignore the object with incorrect data fields', () => {});
    it('Should add ordinal objects correctly if another field is missing in the object', () => {});
});
