import 'jsdom-global/register';

import CreateCurrentVisualisation from '../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import GetCurrentVisualisation from '../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/GetCurrentVisualisation';
import { ILinePlotCreateVis } from '../../../../src/interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../src/interfaces/plotting/ILinePlotOptions';
describe('GetCurrentVisualisation domain component', () => {
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
        const createCurrentVisual = new CreateCurrentVisualisation(currentVisual);
        createCurrentVisual.createCurrentVisual();
        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual(currentVisual);
    });
});
