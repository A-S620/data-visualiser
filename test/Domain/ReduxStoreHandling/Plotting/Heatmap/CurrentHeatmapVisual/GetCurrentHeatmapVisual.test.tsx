import 'jsdom-global/register';
import React from 'react';
import { IHeatmapSeriesCreateVis } from '../../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';
import GetCurrentHeatmapVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/GetCurrentHeatmapVisual';
import CreateCurrentHeatmapVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/CreateCurrentHeatmapVisual';

describe('GetCurrentHeatmapVisual domain component', () => {
    it('Should return the correct Current Visualisation', () => {
        const currentVisual: IHeatmapSeriesCreateVis = {
            colourRange: ['000000', '000000'],
            colour: '000000',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            fill: '000000',
            height: 500,
            opacity: 500,
            stroke: '000000',
            width: 0,
        };
        const createCurrentVisual = new CreateCurrentHeatmapVisual(currentVisual);
        createCurrentVisual.createCurrentVisual();
        const getCurrentVisual = new GetCurrentHeatmapVisual();
        expect(getCurrentVisual.getCurrentVisual()).toEqual(currentVisual);
    });
});
