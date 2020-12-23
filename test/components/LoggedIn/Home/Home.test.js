import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';

import Home from '../../../../src/components/LoggedIn/Home/Home';

describe('Home page', () => {
    const wrapper = mount(<Home />);
});
