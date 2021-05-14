import 'jsdom-global/register';
import React from 'react';
import CurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import { ILineSeriesVis } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesVis';
import { CurveType, LineStyle } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import HeatmapSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions';
import { IHeatmapSeriesOptions } from '../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new HeatmapSeriesOptions();
    resetCurrentVis.reset();
});

describe('HeatmapSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IHeatmapSeriesOptions = {
            colour: '',
            colourRange: { colour1: '', colour2: '' },
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new HeatmapSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
