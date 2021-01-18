import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import CreateCurrentVisualisation from '../../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import { ILinePlotCreateVis } from '../../../../../src/interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../../src/interfaces/plotting/ILinePlotOptions';
import { store } from '../../../../../src/ReduxStore/store';
import LineSeriesVis from '../../../../../src/UI/LoggedIn/Plotting/Line/LineSeriesVis';
import { Provider } from 'react-redux';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: ILinePlotCreateVis = {
        data: [
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ],
        height: 500,
        width: 500,
        colour: '000000',
        opacity: 0.5,
        curveType: CurveType.curveMonotoneY,
        lineStyle: LineStyle.SOLID,
        lineWidth: 2,
    };
    const currentVis = new CreateCurrentVisualisation(currentVisual).createCurrentVisual();
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <LineSeriesVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Line Series Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#line-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
