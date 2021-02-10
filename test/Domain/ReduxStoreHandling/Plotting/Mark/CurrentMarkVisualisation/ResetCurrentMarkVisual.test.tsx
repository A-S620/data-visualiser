import 'jsdom-global/register';
import React from 'react';
import CreateCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/CreateCurrentBarVisual';
import GetCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/GetCurrentBarVisual';
import ResetCurrentBarVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/ResetCurrentBarVisual';
import { IBarSeriesCreateVis } from '../../../../../../src/Interfaces/plotting/Bar/IBarSeriesCreateVis';
import { IMarkSeriesCreateVis } from '../../../../../../src/Interfaces/plotting/Mark/IMarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/CreateCurrentMarkVisual';
import GetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/GetCurrentMarkVisual';
import ResetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/ResetCurrentMarkVisual';

describe('ResetCurrentMarkVisual domain component', () => {
    it('Should reset the Current mark Visualisation', () => {
        const currentVisual: IMarkSeriesCreateVis = {
            colour: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
        };
        const createCurrentVisual = new CreateCurrentMarkVisual(currentVisual);
        createCurrentVisual.createCurrentMarkVisual();
        const resetCurrentVis = new ResetCurrentMarkVisual();
        resetCurrentVis.resetCurrentMarkVisual();
        const getCurrentVisual = new GetCurrentMarkVisual();
        expect(getCurrentVisual.getCurrentMarkVisual()).toEqual({});
    });
});
