import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../../../src/ReduxStore/store';
import ImportFiles from '../../../../../src/components/LoggedIn/ImportFileHandling/Import/ImportFiles';
import ImportedFileStats from '../../../../../src/components/LoggedIn/ImportFileHandling/Import/ImportedFileStats';

let component: ReactWrapper;
beforeEach(
    () =>
        (component = mount(
            <Provider store={store}>
                <ImportFiles />
            </Provider>
        ))
);
afterEach(() => component.unmount());

describe('Import Files', () => {
    describe('Drag and Drop', () => {
        it('should have a drag and drop feature', () => {
            expect(component.find('div#drop-zone-area').find('input')).toBeTruthy();
        });
        it('should accept JSON and CSV files in the drag and drop feature', () => {
            const dropZone = component.find('input');

            expect(dropZone.props().type).toBe('file');

            expect(dropZone.props().accept).toBe('text/csv');
        });
    });
    describe('Buttons', () => {
        it('should disable delete button when no files have been inputted', () => {
            expect(component.find('button#delete-import-button').props().disabled).toBe(true);
        });
    });
    describe('Imported file statistics', () => {
        const fileStatsObject = {
            fileType: '',
            fileSize: '',
            characterCount: undefined,
        };
        const importedFileStats = mount(<ImportedFileStats {...fileStatsObject} />);
        it('Should show a File Type stat', () => {
            const stat = importedFileStats.find('div#fileType-stat');
            expect(stat.text()).toEqual('File Type');
        });
        it('Should show a File Size stat', () => {
            const stat = importedFileStats.find('div#fileSize-stat');
            expect(stat.text()).toEqual('File Size (KB)');
        });
        it('Should show a Character count stat', () => {
            const stat = importedFileStats.find('div#characterCount-stat');
            expect(stat.text()).toEqual('Character Count');
        });
    });
});
