import { mount, ReactWrapper } from 'enzyme';

import 'jsdom-global/register';
import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import { Provider } from 'react-redux';
import FieldTypes from '../../../../../src/UI/LoggedIn/ImportFileHandling/Analyse/DataTypes';
import { IImportedFile } from '../../../../../src/Interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../../../../src/UIHandling/ImportFilesHandler';
import GetAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ImportedData from '../../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';

let component: ReactWrapper;
beforeEach(
    () =>
        (component = mount(
            <Provider store={reduxStore}>
                <FieldTypes />
            </Provider>
        ))
);
afterEach(() => component.unmount());
beforeAll(() => {
    const importedFile: IImportedFile = {
        file: testCSV,
        fileType: 'text/csv',
    };
    const importFile = new ImportFilesHandler(importedFile);
    importFile.validate();
});
afterAll(() => {
    new ImportedData().reset();
});

describe('Field Types UI Component', () => {
    it('Should have the correct title', () => {
        expect(component.find('p#field-types-title').text()).toBe('Select Field Types:');
    });
    it('should have an Analyse File Button', () => {
        const button = component.find('button#analyse-file-button');
        expect(button.text()).toBe('Analyse File');
    });
    describe('Fields Table', () => {
        it('Should have Field Name and Field Type headings', () => {
            const tableHead = component.find('div#fields-table').find('table').find('thead');
            expect(tableHead.find('th#field-name-cell').text()).toEqual('Field Name');
            expect(tableHead.find('th#field-type-cell').text()).toEqual('Field Type');
        });
        it('Should have the correct columns in the table', () => {
            const tableBody = component.find('div#fields-table').find('table').find('tbody');
            expect(tableBody.text()).toEqual('col1​col2​col3​');
        });
        it('should have the correct number of selects', () => {
            const tableBody = component.find('div#fields-table').find('table').find('tbody');
            expect(tableBody.find('td#col1-select-cell').find('input').props().name).toBe('col1-select');
            expect(tableBody.find('td#col2-select-cell').find('input').props().name).toBe('col2-select');
            expect(tableBody.find('td#col3-select-cell').find('input').props().name).toBe('col3-select');
        });
    });
    describe('Analyse File button', () => {
        it('Should be disabled when no field types are selected', () => {
            const button = component.find('button#analyse-file-button');
            expect(button.props().disabled).toBe(true);
        });
        it('Should submit and create fields when all field types have been selected', async () => {
            setFirstFieldType('interval');
            setSecondFieldType('interval');
            setThirdFieldType('ignore');
            const button = component.find('button#analyse-file-button');
            expect(button.props().disabled).toBe(false);
            await clickAnalyseFile();
            const getAnalysedData = new GetAnalysedData();
            expect(getAnalysedData.get().fields).toStrictEqual([
                { field: 'col1', fieldType: 'interval' },
                { field: 'col2', fieldType: 'interval' },
                { field: 'col3', fieldType: 'ignore' },
            ]);
            expect(component.find('div#alert-area').find('div#notification-alert').text()).toBe(
                'Field Types Validated'
            );
        });
    });
});
function setFirstFieldType(value: string) {
    const tableBody = component.find('div#fields-table').find('table').find('tbody');
    const select = tableBody.find('td#col1-select-cell');
    select.find('input').simulate('change', { target: { value: value } });
}
function setSecondFieldType(value: string) {
    const tableBody = component.find('div#fields-table').find('table').find('tbody');
    const select = tableBody.find('td#col2-select-cell');
    select.find('input').simulate('change', { target: { value: value } });
}
function setThirdFieldType(value: string) {
    const tableBody = component.find('div#fields-table').find('table').find('tbody');
    const select = tableBody.find('td#col3-select-cell');
    select.find('input').simulate('change', { target: { value: value } });
}
function clickAnalyseFile() {
    component.find('button#analyse-file-button').simulate('click');
}
