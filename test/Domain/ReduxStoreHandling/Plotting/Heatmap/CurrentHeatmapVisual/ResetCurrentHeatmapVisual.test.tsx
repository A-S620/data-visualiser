import 'jsdom-global/register';
import React from 'react';
import { IHeatmapSeriesCreateVis } from '../../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';
import CreateCurrentHeatmapVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/CreateCurrentHeatmapVisual';
import ResetHeatmapSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/ResetHeatmapSeriesOptions';
import GetCurrentHeatmapVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/GetCurrentHeatmapVisual';
import ResetCurrentHeatmapVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/ResetCurrentHeatmapVisual';

describe('ResetCurrentBarVisual domain component', () => {
    it('Should reset the Current bar Visualisation', () => {
        const currentVisual: IHeatmapSeriesCreateVis = {
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            colour: '000000',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
        };
        const createCurrentVisual = new CreateCurrentHeatmapVisual(currentVisual);
        createCurrentVisual.createCurrentVisual();

        const resetCurrentVis = new ResetCurrentHeatmapVisual();
        resetCurrentVis.resetCurrentVisual();
        const getCurrentVisual = new GetCurrentHeatmapVisual();
        expect(getCurrentVisual.getCurrentVisual()).toEqual({});
    });
});
