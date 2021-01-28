import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import CreateAnalysedData from '../../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import ResetAnalysedData from '../../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import LinePlottingOptions from '../../../../../src/UI/LoggedIn/Plotting/Line/LinePlottingOptions';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/interfaces/Analyse/IAnalysedFileData';

let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <LinePlottingOptions />
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
    };
    const createAnalysedFileData = new CreateAnalysedData(analysedFileData);

    createAnalysedFileData.createFields();
    createAnalysedFileData.createIntervalDataObjects();
    createAnalysedFileData.createIntervalFields();
});
afterAll(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('Line Plotting Options Component', () => {
    describe('UI Components', () => {
        it('Should have the correct title', () => {
            const title = wrapper.find('p#line-plotting-title');
            expect(title.text()).toBe('Line Series Plotting Options');
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
        it('Should have a colour select', () => {
            const colourSelect = wrapper.find('div#colour-textfields').find('div#colour-select').find('label');
            expect(colourSelect.text()).toEqual('Colour');
        });
        it('Should have a opacity textfield', () => {
            const textfield = wrapper.find('div#colour-textfields').find('label#opacity-textfield-label');
            expect(textfield.text()).toBe('Opacity');
        });
        it('Should have a curve select', () => {
            const select = wrapper.find('div#curve-select').find('label');
            expect(select.text()).toBe('Curve');
        });
        it('Should have a line style select', () => {
            const select = wrapper.find('div#line-style-select').find('label');
            expect(select.text()).toBe('Line Style');
        });
        it('Should have a line width textfield', () => {
            const textfield = wrapper.find('div#line-options').find('label#line-width-textfield-label');
            expect(textfield.text()).toBe('Line Width');
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
    describe('Integration with Line Plot Handler', () => {
        it('Should give a success notification when valid options are submitted', async () => {
            await selectXVal('col1');
            await selectYVal('col2');
            await selectCurve('curveBasis');
            await selectLineStyle('solid');
            await inputLineWidth(5);

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
                'Error(s): The maximum value for Height is 800, the minimum value for Height is 100. The current height is 50'
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
function inputLineWidth(value: number) {
    wrapper.find('input#line-width-textfield').simulate('change', {
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
function selectCurve(value: string) {
    const curve = wrapper.find('div#curve-select');
    curve
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
function selectLineStyle(value: string) {
    const lineStyle = wrapper.find('div#line-style-select');
    lineStyle
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
