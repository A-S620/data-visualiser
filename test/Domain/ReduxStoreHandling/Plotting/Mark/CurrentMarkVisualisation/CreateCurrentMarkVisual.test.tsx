import 'jsdom-global/register';
import React from 'react';
import ResetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/ResetCurrentMarkVisual';
import { IMarkSeriesCreateVis } from '../../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/CreateCurrentMarkVisual';
import GetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/GetCurrentMarkVisual';
beforeEach(() => {
    const resetCurrentVis = new ResetCurrentMarkVisual();
    resetCurrentVis.resetCurrentMarkVisual();
});

describe('CreateCurrentMarkVisual domain component', () => {
    it('Should add the current mark visualisation to the redux store', () => {
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
        const getCurrentVisual = new GetCurrentMarkVisual();
        expect(getCurrentVisual.getCurrentMarkVisual()).toEqual(currentVisual);
    });
});
