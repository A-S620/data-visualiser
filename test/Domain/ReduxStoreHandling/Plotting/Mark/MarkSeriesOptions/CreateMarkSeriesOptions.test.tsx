import 'jsdom-global/register';
import React from 'react';
import { yValue } from '../../../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import ResetMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/ResetMarkSeriesOptions';
import { IMarkSeriesOptions } from '../../../../../../src/Interfaces/plotting/Mark/IMarkSeriesOptions';
import CreateMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/CreateMarkSeriesOptions';
import GetMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/GetMarkSeriesOptions';

beforeEach(() => {
    const resetOptions = new ResetMarkSeriesOptions();
    resetOptions.resetMarkSeriesOptions();
});

describe('CreateMarkSeriesOptions domain component', () => {
    it('Should add the mark series options to the Redux store', () => {
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
        const getOptions = new GetMarkSeriesOptions();

        expect(getOptions.getMarkSeriesOptions()).toEqual(options);
    });
});
