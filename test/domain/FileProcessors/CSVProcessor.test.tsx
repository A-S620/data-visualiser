//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CSVProcessor from '../../../src/domain/FileProcessors/CSVProcessor';

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
describe('CSVProcessor domain component', () => {
    it('should return the CSV File as string when CSV file is valid', async () => {
        /*
        Given I have a CSV file
        When I  create an instance of CSVProcessor with my CSV file
        The CSV file should be converted into an array of objects
        */
        const processor = new CSVProcessor(testCSV);
        expect(processor.getCSVFile()).toBe(testCSV);
    });
    it('should return the csvFields from the testCSV', () => {
        //Given I have a CSV file with csvFields
        //When I create an instance of CSV Processor with my CSV file
        //Then the CSV Processor should return the csvFields as an array

        const processor = new CSVProcessor(testCSV);
        expect(processor.getCSVFields()).toStrictEqual(csvFields);
    });
    it('should return the testCSV file as an array of objects', () => {
        //Given I have a CSV file
        //When I create an instance of CSV processor with my CSV file
        //Then the CSVProcessor should return the file as an array of objects

        const processor = new CSVProcessor(testCSV);
        expect(processor.csvToObjects()).toStrictEqual(csvAsObjects);
    });
    it('should return the testCSV file as an array of arrays', () => {
        //Given I have a CSV file
        //When I create an instance of CSV processor with my CSV file
        //Then the CSVProcessor should return the file as an array of arrays
        const processor = new CSVProcessor(testCSV);
        expect(processor.csvToArrays()).toStrictEqual(csvAsArrays);
    });
});
