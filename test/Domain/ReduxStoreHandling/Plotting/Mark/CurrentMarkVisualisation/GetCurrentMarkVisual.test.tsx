import 'jsdom-global/register';
import React from 'react';
import { IMarkSeriesCreateVis } from '../../../../../../src/Interfaces/plotting/Mark/IMarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/CreateCurrentMarkVisual';
import GetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/GetCurrentMarkVisual';

describe('GetCurrentMarkVisual domain component', () => {
    it('Should return the correct Current Mark Visualisation', () => {
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
