import { mount, ReactWrapper } from 'enzyme';

import 'jsdom-global/register';
import { ILineSeriesVis } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesVis';
import { CurveType, LineStyle } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { reduxStore } from '../../../../src/ReduxStore/reduxStore';
import LineSeriesVis from '../../../../src/UI/Visualisation/Line/LineSeriesVis';
import { Provider } from 'react-redux';
import CurrentLineVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: ILineSeriesVis = {
        data: [
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ],
        height: 500,
        width: 500,
        stroke: '000000',
        opacity: 0.5,
        curveType: CurveType.curveMonotoneY,
        lineStyle: LineStyle.SOLID,
        lineWidth: 2,
    };
    new CurrentLineVisual().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
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
