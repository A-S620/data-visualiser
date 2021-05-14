import 'jsdom-global/register';
import React from 'react';
import CurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import { IHeatmapSeriesVis } from '../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesVis';
import CurrentHeatmapVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual';

beforeEach(() => {
    const resetCurrentVis = new CurrentLineVisual();
    resetCurrentVis.reset();
});

describe('CurrentHeatmapVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IHeatmapSeriesVis = {
            colour: '',
            colourRange: { colour1: '', colour2: '' },
            data: [],
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
        };
        const currentVisHandling = new CurrentHeatmapVisual();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
