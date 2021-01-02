import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { store } from '../../../../src/ReduxStore/store';
import UserNavigation from '../../../../src/components/LoggedIn/Navigation/UserNavigation';

let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <UserNavigation />
            </Provider>
        ))
);
describe('UserNavigation Component', () => {
    it('should have the correct items in the menu', () => {
        const pages = ['Home', 'Plotting', 'Export', 'Settings'];

        const menu = wrapper.find('div#menu-tabs');

        expect(menu.find('button#simple-tab-0').text()).toBe(pages[0]);
        expect(menu.find('button#simple-tab-1').text()).toBe(pages[1]);
        expect(menu.find('button#simple-tab-2').text()).toBe(pages[2]);
        expect(menu.find('button#simple-tab-3').text()).toBe(pages[3]);
    });
    it('Should have the Plotting and Export tabs disabled when the component is first rendered', () => {
        const menu = wrapper.find('div#menu-tabs');
        expect(menu.find('button#simple-tab-1').props().disabled).toBe(true);
        expect(menu.find('button#simple-tab-2').props().disabled).toBe(true);
    });
});
