import 'jsdom-global/register';
import React from 'react';
import { IMarkSeriesVis } from '../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesVis';
import CurrentMarkVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual';
beforeEach(() => {
    new CurrentMarkVisual().reset();
});

describe('CurrentMarkVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IMarkSeriesVis = {
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
        const currentMarkVisual = new CurrentMarkVisual();
        currentMarkVisual.create(currentVisual);
        expect(currentMarkVisual.get()).toEqual(currentVisual);
        currentMarkVisual.reset();
        expect(currentMarkVisual.get()).toEqual({});
    });
});
