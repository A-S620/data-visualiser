import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';

import Construction from '../../../../src/components/NotLoggedIn/Construction/Construction';

describe('Construction Page', () => {
    const component = mount(<Construction />);
    it('should render without any errors', () => {
        expect(component).toMatchSnapshot();
    });
});
