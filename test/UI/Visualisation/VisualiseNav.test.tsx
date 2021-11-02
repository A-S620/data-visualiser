import { mount } from 'enzyme';

import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { reduxStore } from '../../../src/ReduxStore/reduxStore';
import VisualiseNav from '../../../src/UI/Visualisation/VisualiseNav';

describe('Plotting Navigation Component', () => {
    const wrapper = mount(
        <Provider store={reduxStore}>
            <VisualiseNav />
        </Provider>
    );

    it('should have the correct items in the menu', () => {
        const pages = ['Line', 'Bar', 'Mark', 'Area', 'Radial', 'Heatmap'];

        const menu = wrapper.find('div#plotting-tabs');

        expect(menu.find('button#line-tab').text()).toBe(pages[0]);
        expect(menu.find('button#bar-tab').text()).toBe(pages[1]);
        expect(menu.find('button#mark-tab').text()).toBe(pages[2]);
        expect(menu.find('button#area-tab').text()).toBe(pages[3]);
        expect(menu.find('button#radial-tab').text()).toBe(pages[4]);
        expect(menu.find('button#heatmap-tab').text()).toBe(pages[5]);
    });
});
