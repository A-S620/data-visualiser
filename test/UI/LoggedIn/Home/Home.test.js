import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Home from '../../../../src/UI/LoggedIn/Home/Home';
import { reduxStore } from '../../../../src/ReduxStore/reduxStore';

describe('Home page', () => {
    const wrapper = mount(
        <Provider store={reduxStore}>
            <Home />
        </Provider>
    );
    it('should have the home page in it', () => {
        expect(wrapper.find('div#home-page')).toBeTruthy();
    });
    it('should have the Import File component in it', () => {
        expect(wrapper.find('div#import-file-component')).toBeTruthy();
    });
});
