//Imports from libraries
import 'jsdom-global/register';
import React from 'react';

//Interface Components
import {FileType} from '../../../src/domain/interfaces/IFileType';
//Domain Components
import {ImportData} from '../../../src/domain/UIHandlers/ImportData';

//Store components
import {store} from '../../../src/store/store';
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
describe('Import Data', () => {
    it('should return file is empty when files are empty', () => {
        //Given I have an import file component
        //When I import an empty file
        //Then I should get an error saying the file is empty

        const importDataNotifications = new ImportData('', FileType.CSV).validate();

        expect(importDataNotifications.notification()).toBe('File is empty');
    });
    it('Should add the file data correctly to the Redux store', () => {
        //Given I have an import file componenet
        //When I import data
        //Then it should add the file to the redux store correctly

        const importDataNotifications = new ImportData(TestCSV, FileType.CSV).validate();
        expect(store.getState().columns).toStrictEqual(columns);
        expect(store.getState().dataAsObjects).toStrictEqual(CSVAsObjects);
        expect(store.getState().dataAsArrays).toStrictEqual(CSVAsArrays);
    });
});
