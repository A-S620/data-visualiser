import { mount, ReactWrapper } from 'enzyme';

import 'jsdom-global/register';
import { Provider } from 'react-redux';
import { IBarSeriesVis } from '../../../../src/Interfaces/Visualisations/Bar/IBarSeriesVis';
import { reduxStore } from '../../../../src/ReduxStore/reduxStore';
import BarSeriesVis from '../../../../src/UI/Visualisation/Bar/BarSeriesVis';
import CurrentBarVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IBarSeriesVis = {
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
    new CurrentBarVisual().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
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
