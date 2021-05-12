import 'jsdom-global/register';
import React from 'react';
import MarkSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';
import { IMarkSeriesOptions } from '../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new MarkSeriesOptions();
    resetCurrentVis.reset();
});

describe('MarkSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new MarkSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
