import 'jsdom-global/register';
import React from 'react';

import CreateLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import GetLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import ResetLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import {
    CurveType,
    ILineSeriesOptions,
    LineStyle,
} from '../../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

beforeEach(() => {
    const resetLineSeriesOptions = new ResetLineSeriesOptions();
    resetLineSeriesOptions.resetLineSeriesOptions();
});
describe('CreateLineSeriesOptions domain component', () => {
    it('Should add the line series options to the Redux store', () => {
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
        const createLineSeriesOptions = new CreateLineSeriesOptions(lineOptions);
        createLineSeriesOptions.createLineSeriesOptions();
        const getLineSeriesOptions = new GetLineSeriesOptions();
        expect(getLineSeriesOptions.getLineSeriesOptions()).toEqual(lineOptions);
    });
});
