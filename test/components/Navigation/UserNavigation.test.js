//Imports from libraries
import { mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';

//UI Components Imports
import UserNavigation from '../../../src/components/Navigation/UserNavigation';

describe('UserNavigation Component', () => {
    const wrapper = mount(<UserNavigation />);

    it('should have the correct items in the menu', () => {
        //given that I have a menu
        //when I want to navigate to a page
        //then it should allow me to navigate to that page
        const pages = ['Home', 'Export', 'Plotting', 'Settings'];

        const menu = wrapper.find('div#menu-tabs');

        expect(menu.find('button#simple-tab-0').text()).toBe(pages[0]);
        expect(menu.find('button#simple-tab-1').text()).toBe(pages[1]);
        expect(menu.find('button#simple-tab-2').text()).toBe(pages[2]);
        expect(menu.find('button#simple-tab-3').text()).toBe(pages[3]);
    });
});
