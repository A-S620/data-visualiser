//Imports from libraries
import 'jsdom-global/register';

//Domain Components
import JSONProcessor from '../../../src/domain/FileProcessors/JSONProcessor';

//Test Data
const testJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
const jsonAsArrays = [
    ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'],
    ['1', 'Jeanette', 'Penddreth', 'jpenddreth0@census.gov', 'Female', '26.58.193.2'],
];
const jsonAsObjects = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
];
const jsonFields = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
describe('JSONProcessor domain component', () => {
    it('should return the JSON File as string when JSON file is valid', async () => {
        /*
       Given I have a JSON file
        When I  create an instance of JSONProcessor with my JSON file
        The JSON file should be converted into an array of objects
        */
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.getJSONFile()).toBe(JSON.stringify(testJSON));
    });
    it('should return the jsonFields from the testJSON', () => {
        //Given I have a JSON file with columns
        //When I create an instance of JSON Processor with my JSON file
        //Then the JSON Processor should return the columns as an array

        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.getJSONFields()).toStrictEqual(jsonFields);
    });
    it('should return the testJSON file as an array of objects', () => {
        //Given I have a JSON file
        //When I create an instance of JSON processor with my JSON file
        //Then the JSONProcessor should return the file as an array of objects

        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.jsonToObjects()).toStrictEqual(jsonAsObjects);
    });
    it('should return the testJSON file as an array of arrays', () => {
        //Given I have a JSON file
        //When I create an instance of JSON processor with my JSON file
        //Then the JSONProcessor should return the file as an array of arrays
        const processor = new JSONProcessor(JSON.stringify(testJSON));
        expect(processor.jsonToArrays()).toStrictEqual(jsonAsArrays);
    });
});
