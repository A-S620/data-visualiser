import 'jsdom-global/register';

import CreateCurrentLineVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/CreateCurrentLineVisual';
import GetCurrentLineVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/GetCurrentLineVisual';
import { ILineSeriesCreateVis } from '../../../../../../src/Interfaces/Visualisations/Line/ILineSeriesCreateVis';
import { CurveType, LineStyle } from '../../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
describe('GetCurrentLineVisual domain component', () => {
    it('Should return the correct Current line Visualisation', () => {
        const currentVisual: ILineSeriesCreateVis = {
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const createCurrentVisual = new CreateCurrentLineVisual(currentVisual);
        createCurrentVisual.createCurrentLineVisual();
        const getCurrentVisual = new GetCurrentLineVisual();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual(currentVisual);
    });
});
