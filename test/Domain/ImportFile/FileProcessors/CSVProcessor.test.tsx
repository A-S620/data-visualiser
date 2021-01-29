import 'jsdom-global/register';
import CSVProcessor from '../../../../src/Domain/ImportFile/FileProcessors/CSVProcessor';

//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const invalidCSV = 'col1,,col2,col3\n,foo\n 2,5,bar\nc-1,7,baz';
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
describe('CSVProcessor domain component', () => {
    it('should return the CSV File as string when CSV file is valid', async () => {
        const processor = new CSVProcessor(testCSV);
        expect(processor.getCSVFile()).toBe(testCSV);
    });
    it('should return the csvFields from the testCSV', () => {
        const processor = new CSVProcessor(testCSV);
        expect(processor.getImportedFileData().dataFields).toStrictEqual(csvFields);
    });
    it('should return the testCSV file as an array of objects', () => {
        const processor = new CSVProcessor(testCSV);
        expect(processor.getImportedFileData().dataObjects).toStrictEqual(csvAsObjects);
    });
    it('should return the testCSV file as an array of arrays', () => {
        const processor = new CSVProcessor(testCSV);
        expect(processor.getImportedFileData().dataArrays).toStrictEqual(csvAsArrays);
    });
    it('should return an error when CSV is not valid', () => {
        const processor = new CSVProcessor(invalidCSV);
        expect(processor.validateCSV().getNotifications()).toStrictEqual([
            'FieldMismatch: Too few fields: expected 4 fields but parsed 2, Row: 0',
            'FieldMismatch: Too few fields: expected 4 fields but parsed 3, Row: 1',
            'FieldMismatch: Too few fields: expected 4 fields but parsed 3, Row: 2',
        ]);
    });
});
