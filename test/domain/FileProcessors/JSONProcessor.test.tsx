//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import JSONProcessor from '../../../src/domain/FileProcessors/JSONProcessor';

//Test Data
const TestJSON = {
    id: 1,
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2',
};
const JSONAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const JSONAsObjects = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
];
const columns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
describe('JSONProcessor domain component', () => {
    it('should return the JSON File as string when JSON file is valid', async () => {
        /*
       Given I have a JSON file
        When I  create an instance of JSONProcessor with my JSON file
        The JSON file should be converted into an array of objects
        */
        const processor = new JSONProcessor(JSON.stringify(TestJSON));
        expect(processor.getJSONFile()).toBe(JSON.stringify(TestJSON));
    });
    // it('should return the columns from the TestJSON', () => {
    //     //Given I have a JSON file with columns
    //     //When I create an instance of JSON Processor with my JSON file
    //     //Then the JSON Processor should return the columns as an array
    //
    //     const processor = new JSONProcessor(TestJSON);
    //     expect(processor.getJSONColumns()).toBe(columns);
    // });
    // it('should return the TestJSON file as an array of objects', () => {
    //     //Given I have a JSON file
    //     //When I create an instance of JSON processor with my JSON file
    //     //Then the JSONProcessor should return the file as an array of objects
    //
    //     const processor = new JSONProcessor(JSON.stringify(TestJSON));
    //     console.log(processor.JSONToObjects());
    //     expect(processor.JSONToObjects()).toBe(JSONAsObjects);
    // });
    // it('should return the TestJSON file as an array of arrays', () => {
    //     //Given I have a JSON file
    //     //When I create an instance of JSON processor with my JSON file
    //     //Then the JSONProcessor should return the file as an array of arrays
    //     const processor = new JSONProcessor(JSON.stringify(TestJSON));
    //     expect(processor.JSONToArrays()).toBe(JSONAsArrays);
    // });
});
