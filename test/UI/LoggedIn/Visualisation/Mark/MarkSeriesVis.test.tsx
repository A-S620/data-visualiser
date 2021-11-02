import { mount, ReactWrapper } from 'enzyme';

import 'jsdom-global/register';
import { reduxStore } from '../../../../../src/ReduxStore/reduxStore';
import { Provider } from 'react-redux';
import { IMarkSeriesVis } from '../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesVis';
import CurrentMarkVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual';
import MarkSeriesVis from '../../../../../src/UI/Visualisation/Mark/MarkSeriesVis';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IMarkSeriesVis = {
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
    new CurrentMarkVisual().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={reduxStore}>
                <MarkSeriesVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Mark Series Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#mark-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
