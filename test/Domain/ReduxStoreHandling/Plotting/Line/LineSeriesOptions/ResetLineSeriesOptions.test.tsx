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
    it('Should reset the line series options', () => {
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
        const resetLineSeriesOptions = new ResetLineSeriesOptions();
        resetLineSeriesOptions.resetLineSeriesOptions();
        const getLineSeriesOptions = new GetLineSeriesOptions();
        expect(getLineSeriesOptions.getLineSeriesOptions()).toEqual({});
    });
});
