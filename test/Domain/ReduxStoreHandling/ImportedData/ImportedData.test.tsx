import 'jsdom-global/register';

import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

//Test Data
const dataArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const dataObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const dataFields = ['col1', 'col2', 'col3'];
const importedDataHandler = new ImportedData();
beforeEach(() => {
    importedDataHandler.reset();
});

afterAll(() => {
    importedDataHandler.reset();
});
describe('ImportedData domain component', () => {
    it('Should add, get and reset dataFields in the Redux State', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        importedDataHandler.create(importedData);
        expect(importedDataHandler.get().dataFields).toStrictEqual(dataFields);
        importedDataHandler.reset();
        expect(importedDataHandler.get().dataFields).toStrictEqual([]);
    });
    it('Should add, get and reset data as Arrays in the redux store', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        importedDataHandler.create(importedData);
        expect(importedDataHandler.get().dataArrays).toStrictEqual(dataArrays);
        importedDataHandler.reset();
        expect(importedDataHandler.get().dataArrays).toStrictEqual([]);
    });
    it('Should add, get and reset data as Objects in the redux store', () => {
        const importedData: IImportedFileData = {
            dataFields: dataFields,
            dataObjects: dataObjects,
            dataArrays: dataArrays,
        };
        importedDataHandler.create(importedData);
        expect(importedDataHandler.get().dataObjects).toStrictEqual(dataObjects);
        importedDataHandler.reset();
        expect(importedDataHandler.get().dataObjects).toStrictEqual([]);
    });
});
