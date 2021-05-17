import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { ILineSeriesVis } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesVis';
import { CurveType, LineStyle } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { store } from '../../../../../src/ReduxStore/store';
import LineSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Line/LineSeriesVis';
import { Provider } from 'react-redux';
import CurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import { IAreaSeriesVis } from '../../../../../src/Interfaces/Visualisations/Area/IAreaSeriesVis';
import CurrentAreaVis from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Area/CurrentAreaVis';
import AreaSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Area/AreaSeriesVis';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IAreaSeriesVis = {
        fill: 'blue',
        data: [
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ],
        height: 500,
        width: 500,
        stroke: 'red',
        opacity: 0.5,
        curveType: CurveType.curveMonotoneY,
    };
    new CurrentAreaVis().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <AreaSeriesVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Area Series Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#area-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
