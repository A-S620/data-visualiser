import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../src/ReduxStore/store';
import ImportedDataTable from '../../../../src/UI/LoggedIn/ViewImportedData/ImportedDataTable';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';

let component: ReactWrapper;
beforeAll(() => {
    const importedData: IImportedFileData = {
        dataFields: ['col1', 'col2', 'col3'],
        dataObjects: [
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
            { col1: ' 1', col2: '3', col3: 'foo' },
            { col1: ' 2', col2: '5', col3: 'bar' },
            { col1: 'c-1', col2: '7', col3: 'baz' },
        ],
        dataArrays: [
            ['col1', 'col2', 'col3'],
            [' 1', '3', 'foo'],
            [' 2', '5', 'bar'],
            ['c-1', '7', 'baz'],
        ],
    };
    const createImportedData = new CreateImportedData(importedData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
});
beforeEach(
    () =>
        (component = mount(
            <Provider store={store}>
                <ImportedDataTable />
            </Provider>
        ))
);
afterEach(() => component.unmount());
describe('ImportedDataTable UI component', () => {
    it('Should have a table', () => {
        expect(component.find('table')).toBeTruthy();
    });
    it('should have the correct table columns', () => {
        expect(component.find('thead').text()).toBe('Object IndexObject');
    });
    it('Should have 5 rows when the table is first rendered', () => {
        expect(component.find('tbody').find('tr').length).toBe(5);
    });
    it('should have the correct values in the first row', () => {
        const element = component.find('tbody').find('tr').at(0);
        expect(element.find('th').text()).toEqual('0');
        expect(element.find('td').text()).toEqual('{...}3 items');
    });
    it('Should show the correct number of rows in the table footer', () => {
        expect(component.find('tfoot').find('p').at(1).text()).toBe('1-5 of 16');
    });
    it('Should show the correct number of rows when the option for number of rows has changed', async () => {
        await setNumberOfRows(10);
        expect(component.find('tfoot').find('p').at(1).text()).toBe('1-10 of 16');
        await setNumberOfRows(25);
        expect(component.find('tfoot').find('p').at(1).text()).toBe('1-16 of 16');
    });
    describe('Table navigation', () => {
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
            await component.find('button').at(3).simulate('click');
            expect(component.find('button').at(0).props().disabled).toEqual(false);
            expect(component.find('button').at(1).props().disabled).toEqual(false);
            expect(component.find('button').at(2).props().disabled).toEqual(true);
            expect(component.find('button').at(3).props().disabled).toEqual(true);
        });
        it('Should go to the next page when the next page button is clicked', async () => {
            await component.find('button').at(2).simulate('click');
            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('th').text()).toEqual('5');
        });
        it('Should go to the last page when the last page button is clicked', async () => {
            await component.find('button').at(3).simulate('click');
            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('th').text()).toEqual('15');
        });
        it('Should go to the first page when the first page button is clicked', async () => {
            await component.find('button').at(3).simulate('click');
            await component.find('button').at(0).simulate('click');

            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('th').text()).toEqual('0');
        });
        it('Should go to the previous page when the previous page button is clicked', async () => {
            await component.find('button').at(3).simulate('click');
            await component.find('button').at(1).simulate('click');

            const element = component.find('tbody').find('tr').at(0);
            expect(element.find('th').text()).toEqual('10');
        });
    });
});
function setNumberOfRows(value: number) {
    const element = component.find('tfoot');
    element.find('select').simulate('change', { target: { value: value } });
}
