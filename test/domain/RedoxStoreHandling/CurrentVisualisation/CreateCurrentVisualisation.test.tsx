import 'jsdom-global/register';
import React from 'react';

import CreateCurrentVisualisation from '../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import GetCurrentVisualisation from '../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/GetCurrentVisualisation';
import ResetCurrentVisualisation from '../../../../src/domain/ReduxStoreHandling/CurrentVisualisation/ResetCurrentVisualisation';
import { ILinePlotCreateVis } from '../../../../src/interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../../../src/interfaces/plotting/ILinePlotOptions';
beforeEach(() => {
    const resetCurrentVis = new ResetCurrentVisualisation();
    resetCurrentVis.resetCurrentVisualisation();
});
describe('CreateCurrentVisualisation domain component', () => {
    it('Should add the current visualisation to the redux store', () => {
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
        };
        const createCurrentVisual = new CreateCurrentVisualisation(currentVisual);
        createCurrentVisual.createCurrentVisual();
        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual(currentVisual);
    });
});
