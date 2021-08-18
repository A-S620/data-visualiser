import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import { Provider } from 'react-redux';
import CreateAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import AreaOptions from '../../../../../src/UI/LoggedIn/Visualisation/Area/AreaOptions';
let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
                <AreaOptions />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());
beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ],
        intervalFields: ['col1', 'col2'],
        intervalDataObjects: [
            { col1: 32, col2: 30 },
            { col1: 79, col2: 30 },
            { col1: 76, col2: 30 },
        ],
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
        binaryFields: [],
        binaryDataObjects: [],
        ignoreFields: [],
        ignoreDataObjects: [],
    };
    const createAnalysedFileData = new CreateAnalysedData(analysedFileData);

    createAnalysedFileData.createAll();
});
describe('Area series Options UI component', () => {
    describe('UI Components', () => {
        it('Should have the correct title', () => {
            const element = wrapper.find('p#area-plotting-title');
            expect(element.text()).toBe('Area Series Options');
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
            const element = wrapper.find('div#stroke-select').find('label');
            expect(element.text()).toEqual('Stroke');
        });
        it('Should have a opacity textfield', () => {
            const element = wrapper.find('div#fill-textfields').find('label#opacity-textfield-label');
            expect(element.text()).toBe('Opacity');
        });
        it('Should a bar fill colour select', () => {
            const element = wrapper.find('div#fill-textfields').find('div#fill-select');
            expect(element.text()).toBe('Fill​');
        });
        it('Should have a curve select', () => {
            const select = wrapper.find('div#curve-select').find('label');
            expect(select.text()).toBe('Curve');
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
            await selectXVal('col1');
            expect(wrapper.find('input').at(0).props().value).toBe('col1');
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

            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe('Options Validated');
        });
        it('Should give an error notification when invalid options are submitted', async () => {
            await selectXVal('col2');
            await selectYVal('col1');
            await selectFill('blue');
            await inputHeight(50);
            await inputWidth(500);

            await clickSubmit();

            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe(
                'Error(s): The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
            );
        });
    });
});
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
function clickSubmit(): void {
    wrapper.find('button#options-submit-button').simulate('click');
}
function selectCurve(value: string) {
    const curve = wrapper.find('div#curve-select');
    curve
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
function selectFill(value: string) {
    const curve = wrapper.find('div#fill-select');
    curve
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
}
