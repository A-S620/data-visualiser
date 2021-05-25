import 'jsdom-global/register';
import React from 'react';
import RadialSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import { IRadialSeriesOptions } from '../../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new RadialSeriesOptions();
    resetCurrentVis.reset();
});

describe('RadialSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IRadialSeriesOptions = {
            colour: '',
            height: 0,
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new RadialSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
