import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../../../../src/ReduxStore/store';
import FileAnalysisComponent from '../../../../../src/UI/LoggedIn/ImportFileHandling/Analyse/FileAnalysisComponent';
import { ImportFilesHandler } from '../../../../../src/UIHandling/ImportFilesHandler';
import { IImportedFile } from '../../../../../src/Interfaces/import/IImportedFile';
import { AnalyseFileHandler } from '../../../../../src/UIHandling/AnalyseFileHandler';
import { FieldTypes } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';

//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';

let component: ReactWrapper;
beforeEach(
    () =>
        (component = mount(
            <Provider store={store}>
                <FileAnalysisComponent />
            </Provider>
        ))
);

afterEach(() => component.unmount());
describe('File Analysis component', () => {
    describe('File Analysis stat descriptions', () => {
        it('Should have the title File Analysis', () => {
            expect(component.find('div#title').text()).toBe('File Analysis:');
        });
        it('Should have the Percentage of Integer fields in file stat', () => {
            expect(component.find('div#percent-interval-fields').find('p').text()).toBe('Interval fields in file:');
        });

        it('Should have the Number of Ignored Data Objects stat', () => {
            expect(component.find('div#ignored-objects').find('p').at(0).text()).toBe(
                'Number of Ignored Data Objects:'
            );
        });
        it('Example Data Object stat', () => {
            expect(component.find('div#example-object').find('p').text()).toBe('Example Data Object:');
        });
    });
    describe('File Analysis stats - Intervals ', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile).validate();
        const analyseFileHandler = new AnalyseFileHandler([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.IGNORE },
        ]);
        analyseFileHandler.validateAnalysedData();
        it('Should show the integer fields in the file', () => {
            const intervalColumns = component.find('div#interval-fields');
            expect(intervalColumns.find('div#col1-chip').text()).toBe('col1');
            expect(intervalColumns.find('div#col2-chip').text()).toBe('col2');
        });
        it('Should show the percent of interval fields in file', () => {
            expect(component.find('div#interval-circular-progress-text').text()).toBe('67%');
        });
    });
    describe('File Analysis stats - general', () => {
        const importedFile: IImportedFile = {
            file: testCSV,
            fileType: 'text/csv',
        };
        const importFile = new ImportFilesHandler(importedFile).validate();
        const analyseFileHandler = new AnalyseFileHandler([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.IGNORE },
        ]);
        analyseFileHandler.validateAnalysedData();
        it('Should show the number of ignored values', () => {
            expect(component.find('div#ignored-objects').find('p').at(1).text()).toBe('1');
        });
        it('Should show an example object', () => {
            expect(component.find('div#json-object').text()).toBe('"root":{"col1":" 1""col2":"3""col3":"foo"}');
        });
    });
});
