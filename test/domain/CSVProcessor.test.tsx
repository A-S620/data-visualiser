//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
//Domain Components
import CSVProcessor from '../../src/domain/CSVProcessor';
const papa = require('papaparse');

//Test Data
const TestCSV = require('../TestData/Test.csv');
const files: Array<File> = [];
files.push(TestCSV);

const exampleCSVObject = [
    {
        ID: '1',
        iManufacturer: 'Evans & Sutherland',
        iMPartNumber: '230-132-111AA',
        iSimCategory: 'Visual',
        iPartType: 'PCB',
        iGroup: '1',
        iLocation: 'Offsite',
    },
    {
        ID: '2',
        iManufacturer: 'Evans & Sutherland',
        iMPartNumber: '230-132-111AA',
        iSimCategory: 'Visual',
        iPartType: 'PCB',
        iGroup: '1',
        iLocation: 'Offsite',
    },
];

describe('CSVProcessor domain component', () => {
    it('should return the CSV File as an array of objects when CSV file is valid', async () => {
        /*
        Given I have a CSV file
        When I  create an instance of CSVProcessor with my CSV file
        The CSV file should be converted into an array of objects
        */
        console.log(TestCSV);
        const CSVToText = await files[0].text();
        const processor = new CSVProcessor(TestCSV);

        expect(processor.getCSVColumns()).toBe(CSVToText);
    });
});
