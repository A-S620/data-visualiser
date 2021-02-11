import 'jsdom-global/register';
import React from 'react';
import CreateCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/CreateCurrentBarVisual';
import GetCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/GetCurrentBarVisual';
import ResetCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/ResetCurrentBarVisual';
import { IBarSeriesCreateVis } from '../../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesCreateVis';

describe('ResetCurrentBarVisual domain component', () => {
    it('Should reset the Current bar Visualisation', () => {
        const currentVisual: IBarSeriesCreateVis = {
            barWidth: 0,
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
        const createCurrentVisual = new CreateCurrentBarVisual(currentVisual);
        createCurrentVisual.createCurrentBarVisual();

        const resetCurrentVis = new ResetCurrentBarVisual();
        resetCurrentVis.resetCurrentBarVisual();
        const getCurrentVisual = new GetCurrentBarVisual();
        expect(getCurrentVisual.getCurrentBarVisual()).toEqual({});
    });
});
