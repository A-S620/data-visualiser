import 'jsdom-global/register';
import React from 'react';
import { IPolygonSeriesVis } from '../../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesVis';
import CurrentPolygonVis from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVis';
beforeEach(() => {
    const resetCurrentVis = new CurrentPolygonVis();
    resetCurrentVis.reset();
});

describe('CurrentPolygonVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IPolygonSeriesVis = {
            colour: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 0,
            width: 0,
        };
        const currentPolygonVis = new CurrentPolygonVis();
        currentPolygonVis.create(currentVisual);
        expect(currentPolygonVis.get()).toEqual(currentVisual);
        currentPolygonVis.reset();
        expect(currentPolygonVis.get()).toEqual({});
    });
});