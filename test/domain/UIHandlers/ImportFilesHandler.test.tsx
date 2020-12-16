import { ImportFileHandler } from '../../../src/domain/UIHandlers/ImportFileHandler';
import GetImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/GetImportedData';
import { IImportedFile } from '../../../src/domain/interfaces/IImportedFile';
import { FileType } from '../../../src/domain/interfaces/IFileType';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';

const testJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
describe('ImportFileHandler domain component', () => {
    it('should add data from the imported file to the importedData slice in the store', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: FileType.CSV,
        };
        const importFileErrors = new ImportFileHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('');
    });
    it('should return a notification when there are no integer fields in data', () => {
        const importedFile: IImportedFile = {
            file: JSON.stringify(testJSON),
            fileType: FileType.JSON,
        };
        const importFileErrors = new ImportFileHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual(
            "Imported Data doesn't contain more than 2 integer fields, so it cannot be visualised"
        );
    });
    it('should return a notification when the file is empty', () => {
        const importedFile: IImportedFile = {
            file: '',
            fileType: FileType.CSV,
        };
        const importFileErrors = new ImportFileHandler(importedFile).validate();

        expect(importFileErrors.notification()).toEqual('File is empty');
    });
});
