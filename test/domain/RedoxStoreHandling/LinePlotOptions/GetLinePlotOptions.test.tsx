import 'jsdom-global/register';

import CreateLinePlotOptions from '../../../../src/domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import GetLinePlotOptions from '../../../../src/domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../../src/interfaces/plotting/ILinePlotOptions';
describe('GetLinePlotOptions domain component', () => {
    it('Should return the correct line plot options', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            colour: '#cd3b55',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
        };
        const createLinePlotOptions = new CreateLinePlotOptions(lineOptions);
        createLinePlotOptions.createLinePlotOptions();
        const getLinePlotOptions = new GetLinePlotOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toEqual(lineOptions);
    });
});
