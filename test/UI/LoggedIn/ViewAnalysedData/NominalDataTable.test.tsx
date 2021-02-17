import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../src/ReduxStore/store';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import ResetImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ResetImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import ResetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import NominalDataTable from '../../../../src/UI/LoggedIn/ViewAnalysedData/NominalDataTable';
beforeEach(() => {
    const importedFileData: IImportedFileData = {
        dataArrays: [
            ['col1', 'col2', 'col3'],
            [' 1', '3', 'foo'],
            [' 2', '5', 'bar'],
            ['c-1', '7', 'baz'],
        ],
        dataObjects: [
            {
                col1: 'lmao',
                col2: 'huh',
                col3: 'bruh',
                col4: 'oop',
                col5: 'meh',
                col6: 'brr',
                col8: 'eek',
                col9: 'lol',
                col10: 'uwu',
                col11: 'owa',
                col12: 'nope',
                col13: 'lool',
                col14: 'eh',
                col15: 'eew',
                col16: 'eugh',
            },
        ],
        dataFields: ['col1', 'col2', 'col3'],
    };
    const createImportedData = new CreateImportedData(importedFileData);
    createImportedData.createDataAsObjects();
    createImportedData.createDataFields();
    const analyseFileData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.NOMINAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.NOMINAL },
        { field: 'col4', fieldType: FieldTypes.NOMINAL },
        { field: 'col5', fieldType: FieldTypes.NOMINAL },
        { field: 'col6', fieldType: FieldTypes.NOMINAL },
        { field: 'col7', fieldType: FieldTypes.NOMINAL },
        { field: 'col8', fieldType: FieldTypes.NOMINAL },
        { field: 'col9', fieldType: FieldTypes.NOMINAL },
        { field: 'col10', fieldType: FieldTypes.NOMINAL },
        { field: 'col11', fieldType: FieldTypes.NOMINAL },
        { field: 'col12', fieldType: FieldTypes.NOMINAL },
        { field: 'col13', fieldType: FieldTypes.NOMINAL },
        { field: 'col14', fieldType: FieldTypes.NOMINAL },
        { field: 'col15', fieldType: FieldTypes.NOMINAL },
        { field: 'col16', fieldType: FieldTypes.NOMINAL },
    ]);
    analyseFileData.validateAnalysedData();
});
afterEach(() => {
    const resetImportedDataState = new ResetImportedData();
    resetImportedDataState.resetImportedDataState();
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
let component: ReactWrapper;
beforeEach(
    () =>
        (component = mount(
            <Provider store={store}>
                <NominalDataTable />
            </Provider>
        ))
);
afterEach(() => component.unmount());
describe('NominalDataTable UI Component', () => {
    describe('General', () => {
        it('Should have a table', () => {
            expect(component.find('table')).toBeTruthy();
        });
        it('should have the correct table column', () => {
            expect(component.find('thead').text()).toBe('Nominal Objects');
        });
        it('should have the correct values in the first row', () => {
            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('td').text()).toEqual('"Object 0":{...}1 item');
        });
        it('Should show the correct number of rows in the table footer', () => {
            expect(component.find('tfoot').find('p').at(1).text()).toBe('1-5 of 16');
        });
    });
    describe('Table navigation for more than 5 columns', () => {
        it('Should have 5 rows when the table is first rendered', () => {
            expect(component.find('tbody').find('tr').length).toBe(5);
        });
        it('Should show the correct number of rows when the option for number of rows has changed', async () => {
            await setNumberOfRows(10);
            expect(component.find('tfoot').find('p').at(1).text()).toBe('1-10 of 16');
            await setNumberOfRows(25);
            expect(component.find('tfoot').find('p').at(1).text()).toBe('1-16 of 16');
            await setNumberOfRows(-1);
            expect(component.find('tfoot').find('p').at(1).text()).toBe('1--1 of 16');
            await setNumberOfRows(5);
            expect(component.find('tfoot').find('p').at(1).text()).toBe('1-5 of 16');
        });
        it('should have 4 buttons', () => {
            expect(component.find('button').length).toEqual(4);
            expect(component.find('button').at(0).find('svg')).toBeTruthy();
            expect(component.find('button').at(1).find('svg')).toBeTruthy();
            expect(component.find('button').at(2).find('svg')).toBeTruthy();
            expect(component.find('button').at(3).find('svg')).toBeTruthy();
        });
        it('Should disable the first two buttons when the table is on the first page', () => {
            expect(component.find('button').at(0).props().disabled).toEqual(true);
            expect(component.find('button').at(1).props().disabled).toEqual(true);
            expect(component.find('button').at(2).props().disabled).toEqual(false);
            expect(component.find('button').at(3).props().disabled).toEqual(false);
        });
        it('Should disable the last two buttons when the table is on the last page', async () => {
            await clickLastPage();
            expect(component.find('button').at(0).props().disabled).toEqual(false);
            expect(component.find('button').at(1).props().disabled).toEqual(false);
            expect(component.find('button').at(2).props().disabled).toEqual(true);
            expect(component.find('button').at(3).props().disabled).toEqual(true);
        });
        it('Should go to the next page when the next page button is clicked', async () => {
            await clickNextPage();
            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('td').text()).toEqual('"Object 5":{...}1 item');
        });
        it('Should go to the last page when the last page button is clicked', async () => {
            await clickLastPage();
            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('td').text()).toEqual('"Object 15":{...}1 item');
        });
        it('Should go to the first page when the first page button is clicked', async () => {
            await clickLastPage();
            await clickFirstPage();

            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('td').text()).toEqual('"Object 0":{...}1 item');
        });
        it('Should go to the previous page when the previous page button is clicked', async () => {
            await clickLastPage();
            await clickPreviousPage();

            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('td').text()).toEqual('"Object 10":{...}1 item');
        });
    });
});
function setNumberOfRows(value: number) {
    const element = component.find('tfoot');
    element.find('select').simulate('change', { target: { value: value } });
}
function clickFirstPage() {
    component.find('button').at(0).simulate('click');
}
function clickPreviousPage() {
    component.find('button').at(1).simulate('click');
}
function clickNextPage() {
    component.find('button').at(2).simulate('click');
}
function clickLastPage() {
    component.find('button').at(3).simulate('click');
}