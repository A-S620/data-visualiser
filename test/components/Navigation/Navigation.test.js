import { mount } from 'enzyme';
import Navigation from '../../../src/components/Navigation/Navigation';
import React from 'react';
import Home from '../../../src/components/Home/Home';
import Export from '../../../src/components/Export/Export';
import Settings from '../../../src/components/Settings/Settings';
import 'jsdom-global/register';

describe('Navigation Component', () => {
    const wrapper = mount(<Navigation />);

    it('should have the correct items in the menu', () => {
        //given that I have a menu
        //when I want to navigate to a page
        //then it should allow me to navigate to that page
        const pages = ['Home', 'Export', 'Settings'];

        const menu = wrapper.find('div#menu-tabs');

        expect(menu.find('button#simple-tab-0').text()).toBe(pages[0]);
        expect(menu.find('button#simple-tab-1').text()).toBe(pages[1]);
        expect(menu.find('button#simple-tab-2').text()).toBe(pages[2]);
    });
    it('should change to the Home page when Home is clicked in the menu', () => {
        //given I have a home option in the menu
        //when I click it
        //then it should take me to the home page

        const homeOption = wrapper.find('div#menu-tabs').find('button#simple-tab-0');
        const homePage = mount(<Home />).html();
        const exportPage = mount(<Export />).html();

        homeOption.simulate('click');

        expect(wrapper.html()).toContain(homePage);
    });
    it('should change to the Export page when Export is clicked in the menu', () => {
        //given I have an Export option in the menu
        //when I click it
        //then it should take me to the export page

        const exportOption = wrapper.find('div#menu-tabs').find('button#simple-tab-1');
        const exportPage = mount(<Export />).html();

        exportOption.simulate('click');

        expect(wrapper.html()).toContain(exportPage);
    });
    it('should change to the Settings page when Settings is clicked in the menu', () => {
        //given I have a Settings option in the menu
        //when I click it
        //then it should take me to the Settings page

        const settingsOption = wrapper.find('div#menu-tabs').find('button#simple-tab-2');
        const settingsPage = mount(<Settings />).html();

        settingsOption.simulate('click');

        expect(wrapper.html()).toContain(settingsPage);
    });
});
