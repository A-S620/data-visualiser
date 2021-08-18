import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import React from 'react';
import 'jsdom-global/register';
import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import ResetAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import HeatmapOptions from '../../../../../src/UI/LoggedIn/Visualisation/Heatmap/HeatmapOptions';

let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
                <HeatmapOptions />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());
beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ],
        intervalFields: ['col1', 'col2'],
        intervalDataObjects: [
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ],
        nominalFields: ['col3'],
        nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
        ordinalFields: [],
        ordinalDataObjects: [],
        binaryFields: [],
        binaryDataObjects: [],
        ignoreFields: [],
        ignoreDataObjects: [],
    };
    const createAnalysedFileData = new CreateAnalysedData(analysedFileData);

    createAnalysedFileData.createAll();
});
afterAll(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('heatmap Plotting Options Component', () => {
    describe('UI Components', () => {
        it('Should have the correct title', () => {
            const title = wrapper.find('p#heatmap-plotting-title');
            expect(title.text()).toBe('Heatmap Series Options');
        });
        it('Should have a X Values select', () => {
            const select = wrapper.find('div#x-values-select').find('label');
            expect(select.text()).toBe('X Value *');
        });
        it('Should have a Y Values select', () => {
            const select = wrapper.find('div#y-values-select').find('label');
            expect(select.text()).toBe('Y Value *');
        });
        it('Should have a height textfield', () => {
            const textfield = wrapper.find('div#size-textfields').find('label#height-textfield-label');
            expect(textfield.text()).toBe('Height');
        });
        it('Should have a width textfield', () => {
            const textfield = wrapper.find('div#size-textfields').find('label#width-textfield-label');
            expect(textfield.text()).toBe('Width');
        });
        it('Should have a stroke select', () => {
            const colourSelect = wrapper.find('div#visuals-textfields').find('div#stroke-select').find('label');
            expect(colourSelect.text()).toEqual('Stroke');
        });
        it('Should have a opacity textfield', () => {
            const textfield = wrapper.find('div#visuals-textfields').find('label#opacity-textfield-label');
            expect(textfield.text()).toBe('Opacity');
        });
        it('Should have a colour select', () => {
            const select1 = wrapper.find('div#colour-options').find('div#colour1-select').find('label');
            expect(select1.text()).toBe('Colour 1');
            const select2 = wrapper.find('div#colour-options').find('div#colour2-select').find('label');
            expect(select2.text()).toBe('Colour 2');
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
        it('Should allow the first column to get selected in the xValues select', async () => {
            await selectXVal('col2');
            expect(wrapper.find('input').at(0).props().value).toBe('col2');
        });
        it('Should allow the second column to get selected in the yValues select', async () => {
            await selectYVal('col1');
            expect(wrapper.find('input').at(1).props().value).toBe('col1');
        });
    });
    describe('Validation', () => {
        it('should enable the submit button when the xValue and yValue selects have valid options selected', async () => {
            await selectXVal('col1');

            await selectYVal('col2');

            const button = wrapper.find('button#options-submit-button');
            expect(button.props().disabled).toBe(false);
        });
        it('should not enable the submit button when the xValue and yValue selects have same options selected', async () => {
            await selectXVal('col1');

            await selectYVal('col1');

            const button = wrapper.find('button#options-submit-button');
            expect(button.props().disabled).toBe(true);
        });
    });
    describe('Integration with Heatmap Plot Handler', () => {
        it('Should give a success notification when valid options are submitted', async () => {
            await selectXVal('col1');
            await selectYVal('col2');
            await selectStroke('red');

            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe('Options Validated');
        });
        it('Should give an error notification when invalid options are submitted', async () => {
            await selectXVal('col2');
            await selectYVal('col1');

            await inputHeight(50);
            await inputWidth(500);
            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe(
                'Error(s): The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
            );
        });
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
function selectStroke(value: string) {
    const stroke = wrapper.find('div#stroke-select');
    stroke
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
