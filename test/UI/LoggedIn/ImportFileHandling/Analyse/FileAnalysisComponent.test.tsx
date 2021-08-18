import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';

import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import FileAnalysisComponent from '../../../../../src/UI/LoggedIn/ImportFileHandling/Analyse/FileAnalysisComponent';
import { ImportFilesHandler } from '../../../../../src/UIHandling/ImportFilesHandler';
import { IImportedFile } from '../../../../../src/Interfaces/import/IImportedFile';
import { AnalyseFileHandler } from '../../../../../src/UIHandling/AnalyseFileHandler';
import { FieldTypes } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import ResetAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

//Test Data
const testCSV = 'col1,col2,col3,col4,col5\n 1,3,foo,yes,beep\n 2,5,bar,no,beep\nc-1,7,baz,yes,beep';

let component: ReactWrapper;
beforeEach(() => {
    component = mount(
        <Provider store={reduxStore}>
            <FileAnalysisComponent />
        </Provider>
    );
});

afterEach(() => component.unmount());
afterAll(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('File Analysis component', () => {
    describe('File Analysis stat descriptions', () => {
        it('Should have the title File Analysis', () => {
            expect(component.find('div#title').text()).toBe('File Analysis');
        });
        it('Should have total fields stat', () => {
            expect(component.find('div#total-fields').find('p').at(0).text()).toBe('Total Fields');
        });
        it('Should have interval fields stat', () => {
            expect(component.find('div#interval-fields').find('p').at(0).text()).toBe('Interval Fields');
        });
        it('Should have nominal fields stat', () => {
            expect(component.find('div#nominal-fields').find('p').at(0).text()).toBe('Nominal Fields');
        });
        it('Should have ordinal fields stat', () => {
            expect(component.find('div#ordinal-fields').find('p').at(0).text()).toBe('Ordinal Fields');
        });
        it('Should have binary fields stat', () => {
            expect(component.find('div#binary-fields').find('p').at(0).text()).toBe('Binary Fields');
        });
        it('Should have ignore fields stat', () => {
            expect(component.find('div#ignore-fields').find('p').at(0).text()).toBe('Ignore Fields');
        });
        it('Should show Example Data Object stat', () => {
            expect(component.find('div#example-object').find('p').at(0).text()).toBe('Example Data Object:');
        });
        it('Should show Example Data Object as empty', () => {
            expect(component.find('div#json-object').text()).toBe('"Example Object":{}');
        });
    });
    describe('File Analysis stats - After import ', () => {
        it('Should show the fields in the file', () => {
            const importedFile: IImportedFile = {
                file: testCSV,
                fileType: 'text/csv',
            };
            new ImportFilesHandler(importedFile).validate();
            const analyseFileHandler = new AnalyseFileHandler();
            analyseFileHandler.validateAnalysedData([
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.NOMINAL },
                { field: 'col3', fieldType: FieldTypes.ORDINAL },
                { field: 'col4', fieldType: FieldTypes.BINARY },
                { field: 'col5', fieldType: FieldTypes.IGNORE },
            ]);
            const fields = component.find('div#all-fields');
            expect(fields.text()).toBe('All Data fields:col1col2col3col4col5');
        });
        it('Should have total fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#total-fields').find('p').at(1).text()).toBe('5');
        });
        it('Should have interval fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#interval-fields').find('p').at(1).text()).toBe('1');
        });
        it('Should have nominal fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#nominal-fields').find('p').at(1).text()).toBe('1');
        });
        it('Should have ordinal fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#ordinal-fields').find('p').at(1).text()).toBe('1');
        });
        it('Should have binary fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#binary-fields').find('p').at(1).text()).toBe('1');
        });
        it('Should have ignore fields metric', () => {
            importAndAnalyseData();
            expect(component.find('div#ignore-fields').find('p').at(1).text()).toBe('1');
        });
        it('Should show an example object', () => {
            importAndAnalyseData();
            expect(component.find('div#json-object').text()).toBe(
                '"Example Object":{"col1":" 1""col2":"3""col3":"foo""col4":"yes""col5":"beep"}'
            );
        });
    });
});
function importAndAnalyseData() {
    const importedFile: IImportedFile = {
        file: testCSV,
        fileType: 'text/csv',
    };
    new ImportFilesHandler(importedFile).validate();
    const analyseFileHandler = new AnalyseFileHandler();
    analyseFileHandler.validateAnalysedData([
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.ORDINAL },
    ]);
}
