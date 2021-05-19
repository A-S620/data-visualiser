import { IImportedFile } from '../../src/Interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../src/UIHandling/ImportFilesHandler';
import { AnalyseFileHandler } from '../../src/UIHandling/AnalyseFileHandler';
import { FieldTypes } from '../../src/Interfaces/Analyse/IAnalysedFileData';
import { ResetDataHandler } from '../../src/UIHandling/ResetDataHandler';
import GetAnalysedData from '../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ImportedData from '../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

beforeAll(() => {
    const importedFile: IImportedFile = {
        file: 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz',
        fileType: 'text/csv',
    };
    const importFile = new ImportFilesHandler(importedFile);
    importFile.validate();
    new AnalyseFileHandler().validateAnalysedData([
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.INTERVAL },
    ]);
});
describe('ResetDataHandler UI Handling component', () => {
    it('Should reset the whole applications state', () => {
        new ResetDataHandler().resetData();
        expect(new GetAnalysedData().getAnalysedData()).toEqual({
            fields: [],
            intervalFields: [],
            intervalDataObjects: [],
            nominalFields: [],
            nominalDataObjects: [],
            ordinalFields: [],
            ordinalDataObjects: [],
            binaryFields: [],
            binaryDataObjects: [],
            ignoreFields: [],
            ignoreDataObjects: [],
        });
        expect(new ImportedData().get()).toEqual({
            dataFields: [],
            dataObjects: [],
            dataArrays: [],
        });
    });
});
