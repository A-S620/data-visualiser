import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import FieldTypes from '../../../../../src/UI/LoggedIn/ImportFileHandling/Analyse/FieldTypes';
import { IImportedFile } from '../../../../../src/interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../../../../src/UIHandling/ImportFilesHandler';
import ResetImportedData from '../../../../../src/domain/ReduxStoreHandling/ImportedData/ResetImportedData';

const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\n 1,7,baz';

let component: ReactWrapper;
beforeAll(() => {
    component = mount(
        <Provider store={store}>
            <FieldTypes />
        </Provider>
    );
    const importedFile: IImportedFile = {
        file: testCSV,
        fileType: 'text/csv',
    };
    const importFileErrors = new ImportFilesHandler(importedFile).validate();
});
afterAll(() => {
    component.unmount();
    const resetImportedData = new ResetImportedData();
    resetImportedData.resetImportedDataState();
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
            //TODO
        });
    });
    describe('Analyse File button', () => {
        it('Should be disabled when no field types are selected', () => {
            const button = component.find('button#analyse-file-button');
            expect(button.props().disabled).toBe(true);
        });
        it('Should enable when a field type has been set for all fields', () => {
            expect(component.find('div#col1-field-select')).toBeTruthy();
            setFirstFieldType('unary');
            setSecondFieldType('unary');
            setThirdFieldType('unary');
            const button = component.find('button#analyse-file-button');
            expect(button.props().disabled).toBe(false);
        });
    });
});
function setFirstFieldType(value: string) {
    const select = component.find('td#col1-select').find('div#col1-type-select');
    select
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
function setSecondFieldType(value: string) {
    const select = component.find('div#col2-type-select');
    select
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
function setThirdFieldType(value: string) {
    const select = component.find('div#-type-select');
    select
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
