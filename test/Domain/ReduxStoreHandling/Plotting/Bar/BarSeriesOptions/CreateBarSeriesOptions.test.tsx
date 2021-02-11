import 'jsdom-global/register';
import React from 'react';
import CreateBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import GetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import ResetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import { IBarSeriesOptions, yValue } from '../../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';

beforeEach(() => {
    const resetBarSeriesOptions = new ResetBarSeriesOptions();
    resetBarSeriesOptions.resetBarSeriesOptions();
});

describe('CreateBarSeriesOptions domain component', () => {
    it('Should add the bar series options to the Redux store', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: '#cd3b55',
            fill: '#cd3b55',
            height: 500,
            opacity: 1,
            stroke: '#cd3b55',
            width: 500,
            xValue: 'test',
            yValue: yValue.count,
        };
        const createBarSeriesOptions = new CreateBarSeriesOptions(barOptions);
        createBarSeriesOptions.createBarSeriesOptions();
        const getBarSeriesOptions = new GetBarSeriesOptions();

        expect(getBarSeriesOptions.getBarSeriesOptions()).toEqual(barOptions);
    });
});
