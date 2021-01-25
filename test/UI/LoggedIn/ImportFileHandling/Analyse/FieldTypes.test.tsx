import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import FieldTypes from '../../../../../src/UI/LoggedIn/ImportFileHandling/Analyse/FieldTypes';
let component: ReactWrapper;
beforeAll(
    () =>
        (component = mount(
            <Provider store={store}>
                <FieldTypes />
            </Provider>
        ))
);
afterEach(() => component.unmount());
describe('Field Types UI Component', () => {
    it('Should have the correct title', () => {
        expect(component.find('p#field-types-title').text()).toBe('Select Field Types:');
    });
});
