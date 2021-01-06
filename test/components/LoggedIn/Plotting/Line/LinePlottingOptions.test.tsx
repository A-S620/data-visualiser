import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import LinePlottingOptions from '../../../../../src/components/LoggedIn/Plotting/Line/LinePlottingOptions';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import { IImportedFile } from '../../../../../src/domain/interfaces/import/IImportedFile';
import { ImportFilesHandler } from '../../../../../src/domain/UIHandlers/ImportFilesHandler';
//Test Data
const testCSV = 'col1,col2,col3\n 1,3,foo\n 2,5,bar\nc-1,7,baz';
const importedFile: IImportedFile = {
    file: testCSV,
    fileType: 'text/csv',
};
const importFile = new ImportFilesHandler(importedFile).validate();
let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <LinePlottingOptions />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Line Plotting Options Component', () => {
    it('Should have the correct title', () => {
        const title = wrapper.find('p#line-plotting-title');
        expect(title.text()).toBe('Line Series Plotting Options');
    });
    it('Should have a X Values select', () => {
        const select = wrapper.find('div#x-values-select').find('label');
        expect(select.text()).toBe('X Value *');
    });
    it('Should have a Y Values select', () => {
        const select = wrapper.find('div#y-values-select').find('label');
        expect(select.text()).toBe('Y Value *');
    });
    it('Should have a height textfield', () => {
        const textfield = wrapper.find('div#size-textfields').find('label#height-textfield-label');
        expect(textfield.text()).toBe('Height');
    });
    it('Should have a width textfield', () => {
        const textfield = wrapper.find('div#size-textfields').find('label#width-textfield-label');
        expect(textfield.text()).toBe('Width');
    });
    // it('Should have a colour textfield', () => {
    //     const textfield = wrapper.find('div#colour-textfields').find('label#colour-textfield-label');
    //     expect(textfield.text()).toBe('Colour');
    // });
    it('Should have a opacity textfield', () => {
        const textfield = wrapper.find('div#colour-textfields').find('label#opacity-textfield-label');
        expect(textfield.text()).toBe('Opacity');
    });
    it('Should have a curve select', () => {
        const select = wrapper.find('div#curve-select').find('label');
        expect(select.text()).toBe('Curve *');
    });
    it('Should have a line style select', () => {
        const select = wrapper.find('div#line-style-select').find('label');
        expect(select.text()).toBe('Line Style');
    });
    it('Should have a line width textfield', () => {
        const textfield = wrapper.find('div#line-options').find('label#line-width-textfield-label');
        expect(textfield.text()).toBe('Line Width');
    });
});
