import Home from '../../../src/components/Home/Home';
import React from 'react';
import 'jsdom-global/register';
import { mount } from 'enzyme';

describe('Home page', () => {
    const wrapper = mount(<Home />);
    it('should have a drag and drop feature', () => {
        //given I have a home page
        //when I go on it
        //it should have a drag and drop feature for documents

        const dragAndDrop = wrapper.find('input');

        expect(wrapper.find('input')).toBeTruthy();
    });
    describe('Dropzone area', () => {
        it('should accept JSON files', () => {
            //given I have a dropzone area
            //when I drag a JSON file into it
            //it should accept the document

            const dropZone = wrapper.find('input');

            expect(dropZone.props().type).toBe('file');

            expect(dropZone.props().accept).toBe('application/json');
        });
    });
});
