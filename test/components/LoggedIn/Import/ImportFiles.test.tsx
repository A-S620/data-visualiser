import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

import ImportFiles from '../../../../src/components/LoggedIn/ImportFileHandling/Import/ImportFiles';

jest.mock('../../../../src/domain/ImportedFileHandling/ImportFileData');

let component: ReactWrapper;
beforeEach(() => (component = mount(<ImportFiles />)));
afterEach(() => component.unmount());

describe('Import Files', () => {
    it('should have a drag and drop feature', () => {
        expect(component.find('input')).toBeTruthy();
    });
    it('should accept JSON files in the drag and drop feature', () => {
        const dropZone = component.find('input');

        expect(dropZone.props().type).toBe('file');

        expect(dropZone.props().accept).toBe('text/csv,application/json');
    });
    it('should be disabled when no files have been inputted', () => {
        expect(component.find('button#submit-files-button').props().disabled).toBe(true);
    });
});

function clickSubmit(): void {
    component.find('button#submit-files-button').simulate('click');
}
