import 'jsdom-global/register';

import CreateCurrentLineVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentLineVisualisation/CreateCurrentLineVisualisation';
import GetCurrentLineVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentLineVisualisation/GetCurrentLineVisualisation';
import { ILinePlotCreateVis } from '../../../../src/Interfaces/plotting/Line/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILinePlotOptions';
describe('GetCurrentLineVisualisation domain component', () => {
    it('Should return the correct Current Visualisation', () => {
        const currentVisual: ILinePlotCreateVis = {
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const createCurrentVisual = new CreateCurrentLineVisualisation(currentVisual);
        createCurrentVisual.createCurrentLineVisual();
        const getCurrentVisual = new GetCurrentLineVisualisation();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual(currentVisual);
    });
});
