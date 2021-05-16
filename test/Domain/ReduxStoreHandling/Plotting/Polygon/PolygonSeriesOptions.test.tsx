import 'jsdom-global/register';
import React from 'react';
import PolygonSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/PolygonSeriesOptions';
import { IPolygonSeriesOptions } from '../../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new PolygonSeriesOptions();
    resetCurrentVis.reset();
});

describe('PolygonSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IPolygonSeriesOptions = {
            colour: '',
            height: 0,
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new PolygonSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
