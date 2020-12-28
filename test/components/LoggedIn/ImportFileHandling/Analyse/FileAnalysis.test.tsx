import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../../../src/ReduxStore/store';
import FileAnalysis from '../../../../../src/components/LoggedIn/ImportFileHandling/Analyse/FileAnalysis';
import { ImportFileHandler } from '../../../../../src/domain/UIHandlers/ImportFileHandler';
import { IImportedFile } from '../../../../../src/domain/interfaces/IImportedFile';

//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';

let component: ReactWrapper;
beforeEach(
    () =>
        (component = mount(
            <Provider store={store}>
                <FileAnalysis />
            </Provider>
        ))
);

afterEach(() => component.unmount());
describe('File Analysis component', () => {
    describe('File Analysis stat descriptions', () => {
        it('Should have the title File Analysis', () => {
            expect(component.find('div#file-analysis').find('h4').text()).toBe('File Analysis:');
        });
        it('Should have the Percentage of Integer Columns in file stat', () => {
            expect(component.find('div#file-analysis').find('p').at(0).text()).toBe(
                'Percentage of Integer Columns in file:'
            );
        });
        it('Should have the Integer Columns stat', () => {
            expect(component.find('div#file-analysis').find('p').at(1).text()).toBe('Integer Columns:');
        });
        it('Should have the INumber of Ignored Data Objects stat', () => {
            expect(component.find('div#file-analysis').find('p').at(2).text()).toBe('Number of Ignored Data Objects:');
        });
        //TODO:Fix tests
        it('Example Data Object stat', () => {
            expect(component.find('div#file-analysis').find('p').at(3).text()).toBe('Example Data Object:');
        });
    });
    describe('File Analysis stats', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFileHandler(importedFile).validate();
        it('Should show the integer Columns in the file', () => {
            expect(component.find('div#col1-chip').text()).toBe('col1');
            expect(component.find('div#col2-chip').text()).toBe('col2');
        });
        it('Should show the circular  progress with a value of 67%', () => {
            expect(component.find('div#circular-progress-text').text()).toBe('67%');
        });
        it('Should show an example object', () => {
            expect(component.find('h6#example-object').text()).toBe('{"col1":1,"col2":3}');
        });
    });
});
