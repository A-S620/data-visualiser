import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import CreateAnalysedData from '../../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../../src/Interfaces/Analyse/IAnalysedFileData';
import RadialOptions from '../../../../../src/UI/LoggedIn/Visualisation/Radial/RadialOptions';
import BarSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions';
import { yValue } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import RadialSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';

let wrapper: ReactWrapper;
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <RadialOptions />
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

describe('Radial Series Options UI component', () => {
    describe('UI Components', () => {
        it('Should have the correct title', () => {
            const element = wrapper.find('p#radial-plotting-title');
            expect(element.text()).toBe('Radial Series Options');
        });
        it('Should have a X Values select', () => {
            const element = wrapper.find('div#column-value-select').find('label');
            expect(element.text()).toBe('Column *');
        });
        it('Should have a height textfield', () => {
            const element = wrapper.find('div#size-textfields').find('label#height-textfield-label');
            expect(element.text()).toBe('Height');
        });
        it('Should have a width textfield', () => {
            const element = wrapper.find('div#size-textfields').find('label#width-textfield-label');
            expect(element.text()).toBe('Width');
        });
    });
    describe('Integration with Redux store', () => {
        it('Should allow the xValue to be selected in the xValues select', async () => {
            await selectColumnValue('col3');
            expect(wrapper.find('input').at(0).props().value).toBe('col3');
        });
    });
    describe('Integration with RadialSeriesHandler UI Handler component', () => {
        it('Should give a success notification when valid options are submitted', async () => {
            await selectColumnValue('col3');
            await inputHeight(800);
            await inputWidth(800);
            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe('Options Validated');
        });
        it('Should give an error notification when invalid options are submitted', async () => {
            await selectColumnValue('col3');
            await inputHeight(50);
            await inputWidth(800);
            await clickSubmit();
            expect(wrapper.find('div#alert-area').find('div#notification-alert').text()).toBe(
                'Error(s): The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
            );
        });
        it('Should create the Bar Series Options in the Redux Store', async () => {
            await selectColumnValue('col3');
            await inputHeight(800);
            await inputWidth(800);
            await clickSubmit();
            const seriesOptions = new RadialSeriesOptions();
            expect(seriesOptions.get()).toEqual({
                height: 800,
                width: 800,
                column: 'col3',
            });
        });
    });
});
function selectColumnValue(value: string) {
    const xValSelect = wrapper.find('div#column-value-select');
    xValSelect
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
