import 'jsdom-global/register';
import React from 'react';
import CreateBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import GetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import ResetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import { IBarSeriesOptions } from '../../../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';

describe('ResetBarSeriesOptions domain component', () => {
    it('Should reset the bar series options', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: '#cd3b55',
            fill: '#cd3b55',
            height: 500,
            opacity: 1,
            stroke: '#cd3b55',
            width: 500,
            xValue: 'test',
            yValue: 'count',
        };
        const createBarSeriesOptions = new CreateBarSeriesOptions(barOptions);
        createBarSeriesOptions.createBarSeriesOptions();
        const resetBarSeriesOptions = new ResetBarSeriesOptions();
        resetBarSeriesOptions.resetBarSeriesOptions();
        const getBarSeriesOptions = new GetBarSeriesOptions();

        expect(getBarSeriesOptions.getBarSeriesOptions()).toEqual({});
    });
});
