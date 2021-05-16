import 'jsdom-global/register';
import React from 'react';
import { IAreaSeriesVis } from '../../../../../src/Interfaces/Visualisations/Area/IAreaSeriesVis';
import CurrentAreaVis from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Area/CurrentAreaVis';
import { CurveType } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new CurrentAreaVis();
    resetCurrentVis.reset();
});

describe('CurrentPolygonVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IAreaSeriesVis = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 0,
            width: 0,
        };
        const currentPolygonVis = new CurrentAreaVis();
        currentPolygonVis.create(currentVisual);
        expect(currentPolygonVis.get()).toEqual(currentVisual);
        currentPolygonVis.reset();
        expect(currentPolygonVis.get()).toEqual({});
    });
});
