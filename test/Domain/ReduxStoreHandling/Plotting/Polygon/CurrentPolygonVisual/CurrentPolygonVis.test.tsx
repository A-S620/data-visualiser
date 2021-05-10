import 'jsdom-global/register';
import React from 'react';
import { IPolygonSeriesVis } from '../../../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesVis';
import CurrentPolygonVis from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVisual/CurrentPolygonVis';
beforeEach(() => {
    const resetCurrentVis = new CurrentPolygonVis();
    resetCurrentVis.reset();
});

describe('CreateCurrentPolygonVisual domain component', () => {
    it('Should add the current polygon visualisation to the redux store', () => {
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
