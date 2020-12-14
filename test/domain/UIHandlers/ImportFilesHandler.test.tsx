import { ImportFileHandler } from '../../../src/domain/UIHandlers/ImportFileHandler';
import { GetImportedData } from '../../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const csvAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const csvAsObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const csvFields = ['col1', 'col2', 'col3'];
describe('ImportFileHandler domain component', () => {
    it('should add data from the imported file to the importedData slice in the store', () => {
        const importFileHandler = new ImportFileHandler(testCSV);
        const getImportedData = new GetImportedData();

        expect(getImportedData.getDataFields()).toEqual(csvFields);
    });
});
