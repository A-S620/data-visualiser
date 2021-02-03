import 'jsdom-global/register';

import CreateLinePlotOptions from '../../../../src/Domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import GetLinePlotOptions from '../../../../src/Domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILinePlotOptions';
describe('GetLinePlotOptions domain component', () => {
    it('Should return the correct line plot options', () => {
        const lineOptions: ILinePlotOptions = {
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
        const createLinePlotOptions = new CreateLinePlotOptions(lineOptions);
        createLinePlotOptions.createLinePlotOptions();
        const getLinePlotOptions = new GetLinePlotOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toEqual(lineOptions);
    });
});
