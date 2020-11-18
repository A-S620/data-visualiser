//Imports from libraries
import { mount, ReactWrapper } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

//UI Componenets
import ImportFiles from '../../../../src/components/LoggedIn/Import/ImportFiles';

//Domain Componenets
import { ImportData } from '../../../../src/domain/ImportData';

jest.mock('../../../../src/domain/ImportData');

let component: ReactWrapper;
beforeEach(() => (component = mount(<ImportFiles />)));
afterEach(() => component.unmount());

const exampleJSON = {
    shopping: {
        produce: {
            fruits: {
                apple: 'red',
                pear: 'green',
                banana: 'yello',
                citrus: {
                    orange: 'orange',
                },
            },
        },
    },
};
describe('Import Files', () => {
    // const component = mount(<ImportFiles />);
    it('should have a drag and drop feature', () => {
        //given I have a home page
        //when I go on it
        //it should have a drag and drop feature for documents

        const dragAndDrop = component.find('input');

        expect(component.find('input')).toBeTruthy();
    });
    it('should accept JSON files in the drag and drop feature', () => {
        //given I have a dropzone area
        //when I drag a JSON file into it
        //it should accept the document

        const dropZone = component.find('input');

        expect(dropZone.props().type).toBe('file');

        expect(dropZone.props().accept).toBe('application/json');
    });
    it('should be disabled when no files have been inputted', () => {
        //given I have a dropzone area
        //when I dont have any files imported
        //then the submit button should be disabled.

        expect(component.find('button#submit-files-button').props().disabled).toBe(true);
    });
});

function clickSubmit(): void {
    component.find('button#submit-files-button').simulate('click');
}
