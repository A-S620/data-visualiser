import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

import FileAnalysis from '../../../../../src/components/LoggedIn/ImportFileHandling/Analyse/FileAnalysis';

let component: ReactWrapper;
beforeEach(() => (component = mount(<FileAnalysis />)));
afterEach(() => component.unmount());
describe('File Analysis component', () => {
    it('Should have the title File Analysis', () => {
        expect(component.find('div#file-analysis').text()).toBe('File Analysis');
    });
});
