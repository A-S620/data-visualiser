import 'jsdom-global/register';
import React from 'react';
import {
    CurveType,
    ILineSeriesOptions,
    LineStyle,
} from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import LineSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new LineSeriesOptions();
    resetCurrentVis.reset();
});

describe('LineSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: ILineSeriesOptions = {
            curveType: CurveType.curveLinear,
            height: 0,
            lineStyle: LineStyle.DASHED,
            lineWidth: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new LineSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
