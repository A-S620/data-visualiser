import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import CreateAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import ResetAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import BarSeriesOptions from '../../../../../src/UI/LoggedIn/Plotting/Bar/BarSeriesOptions';
let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <BarSeriesOptions />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());
beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ],
        intervalFields: ['col1'],
        intervalDataObjects: [{ col1: 32 }, { col1: 79 }, { col1: 76 }],
        nominalFields: ['col3'],
        nominalDataObjects: [
            {
                col3: [
                    { name: 'foo', count: 1, percent: 33 },
                    { name: 'bar', count: 1, percent: 33 },
                    { name: 'baz', count: 1, percent: 33 },
                ],
            },
        ],
        ordinalFields: ['col4'],
        ordinalDataObjects: [
            {
                col4: [
                    {
                        name: '10-15',
                        count: 1,
                        percent: 25,
                    },
                    {
                        name: '15-20',
                        count: 2,
                        percent: 50,
                    },
                    {
                        name: '30-35',
                        count: 1,
                        percent: 25,
                    },
                ],
            },
        ],
    };
    const createAnalysedFileData = new CreateAnalysedData(analysedFileData);

    createAnalysedFileData.createFields();
    createAnalysedFileData.createIntervalDataObjects();
    createAnalysedFileData.createIntervalFields();
});
describe('Bar Series Options UI component', () => {
    describe('UI Components', () => {
        it('Should have the correct title', () => {
            const element = wrapper.find('p#bar-plotting-title');
            expect(element.text()).toBe('Bar Series Options');
        });
        it('Should have a X Values select', () => {
            const element = wrapper.find('div#x-values-select').find('label');
            expect(element.text()).toBe('X Value *');
        });
        it('Should have a Y Values select', () => {
            const element = wrapper.find('div#y-values-select').find('label');
            expect(element.text()).toBe('Y Value *');
        });
        it('Should have a height textfield', () => {
            const element = wrapper.find('div#size-textfields').find('label#height-textfield-label');
            expect(element.text()).toBe('Height');
        });
        it('Should have a width textfield', () => {
            const element = wrapper.find('div#size-textfields').find('label#width-textfield-label');
            expect(element.text()).toBe('Width');
        });
        it('Should have a stroke select', () => {
            const element = wrapper.find('div#other-textfields').find('div#stroke-select').find('label');
            expect(element.text()).toEqual('Line Colour');
        });
        it('Should have a opacity textfield', () => {
            const element = wrapper.find('div#colour-options').find('label#opacity-textfield-label');
            expect(element.text()).toBe('Bar Fill Opacity');
        });
        it('Should a bar fill colour select', () => {
            const element = wrapper.find('div#colour-options').find('div#colour-select');
            expect(element.text()).toBe('Bar Fill Colour​');
        });
        it('Should have a bar width text field', () => {
            const element = wrapper.find('div#other-textfields').find('label#bar-width-textfield-label').find('label');
            expect(element.text()).toEqual('Bar Width');
        });
        it('Should have a submit button', () => {
            const button = wrapper.find('button#options-submit-button');
            expect(button.text()).toBe('Submit');
        });
        it('Submit button should be disabled when no xValue and yValue are selected', () => {
            const button = wrapper.find('button#options-submit-button');
            expect(button.props().disabled).toBe(true);
        });
    });
    describe('Integration with Redux store', () => {
        it('Should allow the xValue to be selected in the xValues select', async () => {});
    });
    describe('Validation', () => {
        it('should enable the submit button when the xValue and yValue selects have valid options selected', async () => {});
    });
    describe('Integration with BarSeriesHandler UI Handler component', () => {
        it('Should give a success notification when valid options are submitted', async () => {});
        it('Should give an error notification when invalid options are submitted', async () => {});
    });
});
function clickSubmit(): void {
    wrapper.find('button#options-submit-button').simulate('click');
}
function inputHeight(value: number): void {
    wrapper.find('input#height-textfield').simulate('change', {
        target: { value: value },
    });
}
function inputWidth(value: number): void {
    wrapper.find('input#width-textfield').simulate('change', {
        target: { value: value },
    });
}
function selectXVal(value: string) {
    const xValSelect = wrapper.find('div#x-values-select');
    xValSelect
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
function selectYVal(value: string) {
    const yValSelect = wrapper.find('div#y-values-select');
    yValSelect
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
