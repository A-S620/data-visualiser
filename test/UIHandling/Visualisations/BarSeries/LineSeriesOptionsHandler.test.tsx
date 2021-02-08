import React from 'react';
import 'jsdom-global/register';
import { IBarSeriesOptions, yValue } from '../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { BarSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/BarSeries/BarSeriesOptionsHandler';

describe('BarSeriesOptionsHandler UI Handling component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        const notifications = barSeriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
});
