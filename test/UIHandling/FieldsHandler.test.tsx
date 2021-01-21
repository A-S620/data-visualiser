import { FieldsHandler } from '../../src/UIHandling/FieldsHandler';
import { IFields } from '../../src/interfaces/import/IFields';
import { FieldTypes } from '../../src/interfaces/import/IAnalysedFileData';
import { IImportedFile } from '../../src/interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../src/UIHandling/ImportFilesHandler';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';

beforeAll(() => {
    const importedFile: IImportedFile = {
        file: testCSV,
        fileType: 'text/csv',
    };
    const importFileErrors = new ImportFilesHandler(importedFile).validate();
});
describe('FieldsHandler domain component', () => {
    it('Should return a notification if the fields are empty', () => {
        const fields: IFields = { fields: [{ field: 'test', fieldType: FieldTypes.IGNORE }] };
        const fieldsHandler = new FieldsHandler(fields);
        expect(fieldsHandler.validateFields().notification()).toEqual(
            'Field types have not been selected for all fields'
        );
    });
});
