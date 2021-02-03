import 'jsdom-global/register';

import CreateLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import GetLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import ResetLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import {
    CurveType,
    ILineSeriesOptions,
    LineStyle,
} from '../../../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';

describe('ResetLineSeriesOptions domain component', () => {
    it('Should reset the line plot options', () => {
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
        const resetLinePlotOptions = new ResetLineSeriesOptions();
        resetLinePlotOptions.resetLinePlotOptions();
        const getLinePlotOptions = new GetLineSeriesOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toEqual({});
    });
});
