import 'jsdom-global/register';

import CreateCurrentLineVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentLineVisualisation/CreateCurrentLineVisualisation';
import GetCurrentLineVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentLineVisualisation/GetCurrentLineVisualisation';
import ResetCurrentLineVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentLineVisualisation/ResetCurrentLineVisualisation';
import { ILinePlotCreateVis } from '../../../../src/Interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../src/Interfaces/plotting/ILinePlotOptions';

describe('ResetCurrentLineVisualisation domain component', () => {
    it('Should reset the Current Visualisation', () => {
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

        const resetCurrentVisual = new ResetCurrentLineVisualisation();
        resetCurrentVisual.resetCurrentLineVisual();

        const getCurrentVisual = new GetCurrentLineVisualisation();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual({});
    });
});
