import { mount } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';

import FrontNavigation from '../../../../src/UI/NotLoggedIn/Navigation/FrontNavigation';

describe('FrontNavigation Component', () => {
    const wrapper = mount(<FrontNavigation />);

    it('should have the correct items in the menu', () => {
        const menu = wrapper.find('div#menu-tabs');

        expect(menu.text()).toBe('HomeAboutPrivacy PolicyTerms Of UseDocumentation');
    });
});
