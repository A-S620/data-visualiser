//Imports from libraries
import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';

//UI Components Imports
import Construction from '../../../src/components/NotLoggedIn/Construction/Construction';

describe('Construction Page', () => {
    const component = mount(<Construction />);
    it('should render without any errors', () => {
        //given I have a construction page
        //when a user goes on it
        //it should render without any errors
        expect(component).toMatchSnapshot();
    });
});
