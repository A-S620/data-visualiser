import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import { IHeatmapSeriesVis } from '../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesVis';
import HeatmapVis from '../../../../../src/UI/LoggedIn/Visualisation/Heatmap/HeatmapVis';
import CurrentHeatmapVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IHeatmapSeriesVis = {
        colourRange: {
            colour1: '',
            colour2: '',
        },
        colour: 'red',
        data: [
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ],
        height: 500,
        width: 500,
        stroke: '000000',
        opacity: 0.5,
        fill: 'red',
    };
    new CurrentHeatmapVisual().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <HeatmapVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Heatmap Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#heatmap-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
