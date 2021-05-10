import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { Provider } from 'react-redux';
import CreateCurrentBarVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual/CreateCurrentBarVisual';
import { IBarSeriesCreateVis } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesCreateVis';
import { yValue } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { store } from '../../../../../src/ReduxStore/store';
import BarSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Bar/BarSeriesVis';
import { ILineSeriesCreateVis } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesCreateVis';
import { CurveType, LineStyle } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import CreateCurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/CreateCurrentLineVisual';
import LineSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Line/LineSeriesVis';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IBarSeriesCreateVis = {
        barWidth: 1,
        colour: 'red',
        data: [
            { x: 'tin', y: 30 },
            { x: 'gold', y: 50 },
            { x: 'silver', y: 70 },
        ],
        fill: 'red',
        height: 500,
        opacity: 1,
        stroke: 'red',
        width: 500,
    };
    const currentVis = new CreateCurrentBarVisual(currentVisual).createCurrentBarVisual();
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <BarSeriesVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());
describe('Bar Series Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#bar-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
