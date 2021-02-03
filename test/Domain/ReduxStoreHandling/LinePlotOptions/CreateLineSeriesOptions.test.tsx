import 'jsdom-global/register';
import React from 'react';

import CreateLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/LineSeriesOptions/CreateLineSeriesOptions';
import GetLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/LineSeriesOptions/GetLineSeriesOptions';
import ResetLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/LineSeriesOptions/ResetLineSeriesOptions';
import { CurveType, ILineSeriesOptions, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';

beforeEach(() => {
    const resetLinePlotOptions = new ResetLineSeriesOptions();
    resetLinePlotOptions.resetLinePlotOptions();
});
describe('CreateLineSeriesOptions domain component', () => {
    it('Should add the line plot options to the Redux store', () => {
        const lineOptions: ILineSeriesOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const createLinePlotOptions = new CreateLineSeriesOptions(lineOptions);
        createLinePlotOptions.createLinePlotOptions();
        const getLinePlotOptions = new GetLineSeriesOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toEqual(lineOptions);
    });
});
