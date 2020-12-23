import 'jsdom-global/register';

import JSONProcessor from '../../../../src/domain/ImportedFileHandling/FileProcessors/JSONProcessor';
//Test Data
const testJSON = {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    jsonAsArrays = [
        ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'],
        ['1', 'Jeanette', 'Penddreth', 'jpenddreth0@census.gov', 'Female', '26.58.193.2'],
    ],
    jsonAsObjects = [
        {
            id: 1,
            first_name: 'Jeanette',
            last_name: 'Penddreth',
            email: 'jpenddreth0@census.gov',
            gender: 'Female',
            ip_address: '26.58.193.2',
        },
    ],
    jsonFields = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
describe('JSONProcessor domain component', () => {
    it('should return the JSON File as string when JSON file is valid', async () => {
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.getJSONFile()).toBe(JSON.stringify(testJSON));
    });
    it('should return the jsonFields from the testJSON', () => {
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.getJSONFields()).toStrictEqual(jsonFields);
    });
    it('should return the testJSON file as an array of objects', () => {
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.jsonToObjects()).toStrictEqual(jsonAsObjects);
    });
    it('should return the testJSON file as an array of arrays', () => {
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.jsonToArrays()).toStrictEqual(jsonAsArrays);
    });
});
