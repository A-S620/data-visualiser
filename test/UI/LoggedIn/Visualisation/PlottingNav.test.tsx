import { mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { store } from '../../../../src/ReduxStore/store';
import PlottingNav from '../../../../src/UI/LoggedIn/Visualisation/PlottingNav';

describe('Plotting Navigation Component', () => {
    const wrapper = mount(
        <Provider store={store}>
            <PlottingNav />
        </Provider>
    );

    it('should have the correct items in the menu', () => {
        const pages = ['Line', 'Bar', 'Mark', 'Hexbin', 'Polygon', 'Donut', 'Heatmap'];

        const menu = wrapper.find('div#plotting-tabs');

        expect(menu.find('button#line-tab').text()).toBe(pages[0]);
        expect(menu.find('button#bar-tab').text()).toBe(pages[1]);
        expect(menu.find('button#mark-tab').text()).toBe(pages[2]);
        expect(menu.find('button#hexbin-tab').text()).toBe(pages[3]);
        expect(menu.find('button#polygon-tab').text()).toBe(pages[4]);
        expect(menu.find('button#donut-tab').text()).toBe(pages[5]);
        expect(menu.find('button#heatmap-tab').text()).toBe(pages[6]);
    });
});
