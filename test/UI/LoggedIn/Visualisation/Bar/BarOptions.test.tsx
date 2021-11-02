import { mount, ReactWrapper } from 'enzyme';

import 'jsdom-global/register';
import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import { Provider } from 'react-redux';
import CreateAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import { yValue } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import BarSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions';
import BarOptions from '../../../../../src/UI/LoggedIn/Visualisation/Bar/BarOptions';
let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
                <BarOptions />
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
        binaryFields: [],
        binaryDataObjects: [],
        ignoreFields: [],
        ignoreDataObjects: [],
    };
    const createAnalysedFileData = new CreateAnalysedData(analysedFileData);

    createAnalysedFileData.createAll();
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
        it('Should allow the xValue to be selected in the xValues select', async () => {
            await selectXVal('col3');
            expect(wrapper.find('input').at(0).props().value).toBe('col3');
        });
        it('Should allow the yValue to be selected in the yValues select', async () => {
            await selectYVal('Count');
            expect(wrapper.find('input').at(1).props().value).toBe('count');
        });
    });
    describe('Validation', () => {
        it('should enable the submit button when the xValue and yValue selects have valid options selected', async () => {
            await selectXVal('col3');

            await selectYVal('Count');

            const button = wrapper.find('button#options-submit-button');
            expect(button.props().disabled).toBe(false);
        });
    });
    describe('Integration with BarSeriesHandler UI Handler component', () => {
        it('Should give a success notification when valid options are submitted', async () => {
            await selectXVal('col3');
            await selectYVal('Count');
            await inputOpacity(1);
            await inputHeight(800);
            await inputWidth(800);
            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe('Options Validated');
        });
        it('Should give an error notification when invalid options are submitted', async () => {
            await selectXVal('col3');
            await selectYVal('Count');
            await inputHeight(50);
            await inputWidth(800);
            await inputStrokeColour('red');
            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe(
                'Error(s): The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
            );
        });
        it('Should create the Bar Series Options in the Redux Store', async () => {
            await selectXVal('col3');
            await selectYVal('Count');
            await inputOpacity(1);
            await inputHeight(800);
            await inputWidth(800);
            await inputStrokeColour('red');
            await clickSubmit();
            const seriesOptions = new BarSeriesOptions();
            expect(seriesOptions.get()).toEqual({
                barWidth: 1,
                colour: '#000000',
                fill: '',
                height: 800,
                opacity: 1,
                stroke: 'red',
                width: 800,
                xValue: 'col3',
                yValue: yValue.count,
            });
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
function inputOpacity(value: number): void {
    wrapper.find('input#opacity-textfield').simulate('change', {
        target: { value: value },
    });
}
function inputStrokeColour(value: string) {
    const element = wrapper.find('div#stroke-select');
    element
        .find('input')
        .at(0)
        .simulate('change', { target: { value: value } });
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
