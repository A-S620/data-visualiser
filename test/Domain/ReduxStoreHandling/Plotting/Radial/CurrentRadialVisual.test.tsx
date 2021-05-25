import 'jsdom-global/register';
import React from 'react';
import { IRadialSeriesVis } from '../../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesVis';
import CurrentRadialVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';
beforeEach(() => {
    new CurrentRadialVisual().reset();
});

describe('CurrentRadialVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IRadialSeriesVis = {
            colour: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 0,
            width: 0,
        };
        const currentMarkVisual = new CurrentRadialVisual();
        currentMarkVisual.create(currentVisual);
        expect(currentMarkVisual.get()).toEqual(currentVisual);
        currentMarkVisual.reset();
        expect(currentMarkVisual.get()).toEqual({});
    });
});
