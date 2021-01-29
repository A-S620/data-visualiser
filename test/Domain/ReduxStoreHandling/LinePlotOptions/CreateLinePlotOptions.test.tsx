import 'jsdom-global/register';
import React from 'react';

import CreateLinePlotOptions from '../../../../src/Domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import GetLinePlotOptions from '../../../../src/Domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import ResetLinePlotOptions from '../../../../src/Domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../../src/Interfaces/plotting/ILinePlotOptions';

beforeEach(() => {
    const resetLinePlotOptions = new ResetLinePlotOptions();
    resetLinePlotOptions.resetLinePlotOptions();
});
describe('CreateLinePlotOptions domain component', () => {
    it('Should add the line plot options to the Redux store', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            colour: '#cd3b55',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const createLinePlotOptions = new CreateLinePlotOptions(lineOptions);
        createLinePlotOptions.createLinePlotOptions();
        const getLinePlotOptions = new GetLinePlotOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toEqual(lineOptions);
    });
});
