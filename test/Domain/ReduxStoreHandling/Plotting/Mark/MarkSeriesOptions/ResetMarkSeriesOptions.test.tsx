import 'jsdom-global/register';
import React from 'react';
import CreateBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import GetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import ResetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import { IBarSeriesOptions, yValue } from '../../../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { IMarkSeriesOptions } from '../../../../../../src/Interfaces/plotting/Mark/IMarkSeriesOptions';
import CreateMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/CreateMarkSeriesOptions';
import GetMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/GetMarkSeriesOptions';
import ResetMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/ResetMarkSeriesOptions';

describe('ResetMarkSeriesOptions domain component', () => {
    it('Should reset the mark series options', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: yValue.percent,
        };
        const createOptions = new CreateMarkSeriesOptions(options);
        createOptions.createMarkSeriesOptions();
        const resetOptions = new ResetMarkSeriesOptions();
        resetOptions.resetMarkSeriesOptions();
        const getOptions = new GetMarkSeriesOptions();

        expect(getOptions.getMarkSeriesOptions()).toEqual({});
    });
});
