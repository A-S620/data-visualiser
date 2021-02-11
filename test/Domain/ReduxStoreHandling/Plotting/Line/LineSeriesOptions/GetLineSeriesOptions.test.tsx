import 'jsdom-global/register';

import CreateLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import GetLineSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import {
    CurveType,
    ILineSeriesOptions,
    LineStyle,
} from '../../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
describe('GetLineSeriesOptions domain component', () => {
    it('Should return the correct line series options', () => {
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
