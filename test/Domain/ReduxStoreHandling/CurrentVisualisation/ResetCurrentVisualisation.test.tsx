import 'jsdom-global/register';

import CreateCurrentVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import GetCurrentVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentVisualisation/GetCurrentVisualisation';
import ResetCurrentVisualisation from '../../../../src/Domain/ReduxStoreHandling/CurrentVisualisation/ResetCurrentVisualisation';
import { ILinePlotCreateVis } from '../../../../src/Interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../src/Interfaces/plotting/ILinePlotOptions';

describe('ResetCurrentVisualisation domain component', () => {
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
        const createCurrentVisual = new CreateCurrentVisualisation(currentVisual);
        createCurrentVisual.createCurrentVisual();

        const resetCurrentVisual = new ResetCurrentVisualisation();
        resetCurrentVisual.resetCurrentVisualisation();

        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual({});
    });
});
