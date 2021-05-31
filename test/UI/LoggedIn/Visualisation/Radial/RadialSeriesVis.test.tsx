import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { store } from '../../../../../src/ReduxStore/store';
import { Provider } from 'react-redux';
import { IRadialSeriesVis } from '../../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesVis';
import CurrentRadialVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';
import RadialSeriesVis from '../../../../../src/UI/LoggedIn/Visualisation/Radial/RadialSeriesVis';
let wrapper: ReactWrapper;
beforeAll(() => {
    const currentVisual: IRadialSeriesVis = {
        data: [
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ],
        height: 500,
        width: 500,
    };
    new CurrentRadialVisual().create(currentVisual);
});
beforeEach(
    () =>
        (wrapper = mount(
            <Provider store={store}>
                <RadialSeriesVis />
            </Provider>
        ))
);
afterEach(() => wrapper.unmount());

describe('Radial Series Vis UI Component', () => {
    it('should integrate with the CurrentVisualisation options in Redux', () => {
        const graph = wrapper.find('div#radial-series');
        expect(graph.find('svg').props().width).toEqual(500);
        expect(graph.find('svg').props().height).toEqual(500);
    });
});
