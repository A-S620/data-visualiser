import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import { IMarkSeriesCreateVis } from '../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/CreateCurrentMarkVisual';
import MarkSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Mark/MarkSeriesVis';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IMarkSeriesCreateVis = {
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
    const currentVis = new CreateCurrentMarkVisual(currentVisual).createCurrentMarkVisual();
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
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
