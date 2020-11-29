//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//Domain Components
import CSVProcessor from '../../../src/domain/FileProcessors/CSVProcessor';

//Test Data
const TestCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const CSVAsArrays = [
    ['col1', 'col2', 'col3'],
    [' 1', '3', 'foo'],
    [' 2', '5', 'bar'],
    ['c-1', '7', 'baz'],
];
const CSVAsObjects = [
    { col1: ' 1', col2: '3', col3: 'foo' },
    { col1: ' 2', col2: '5', col3: 'bar' },
    { col1: 'c-1', col2: '7', col3: 'baz' },
];
const columns = ['col1', 'col2', 'col3'];
describe('CSVProcessor domain component', () => {
    it('should return the CSV File as string when CSV file is valid', async () => {
        /*
        Given I have a CSV file
        When I  create an instance of CSVProcessor with my CSV file
        The CSV file should be converted into an array of objects
        */
        const processor = new CSVProcessor(TestCSV);
        expect(processor.getCSVFile()).toBe(TestCSV);
    });
    it('should return the columns from the TestCSV', () => {
        //Given I have a CSV file with columns
        //When I create an instance of CSV Processor with my CSV file
        //Then the CSV Processor should return the columns as an array

        const processor = new CSVProcessor(TestCSV);
        expect(processor.getCSVColumns()).toStrictEqual(columns);
    });
    it('should return the TestCSV file as an array of objects', () => {
        //Given I have a CSV file
        //When I create an instance of CSV processor with my CSV file
        //Then the CSVProcessor should return the file as an array of objects

        const processor = new CSVProcessor(TestCSV);
        expect(processor.CSVToObjects()).toStrictEqual(CSVAsObjects);
    });
    it('should return the TestCSV file as an array of arrays', () => {
        //Given I have a CSV file
        //When I create an instance of CSV processor with my CSV file
        //Then the CSVProcessor should return the file as an array of arrays
        const processor = new CSVProcessor(TestCSV);
        expect(processor.CSVToArrays()).toStrictEqual(CSVAsArrays);
    });
});
