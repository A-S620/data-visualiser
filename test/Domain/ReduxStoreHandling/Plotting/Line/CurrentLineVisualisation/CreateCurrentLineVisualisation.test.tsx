import 'jsdom-global/register';
import React from 'react';

import CreateCurrentLineVisualisation from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/CreateCurrentLineVisualisation';
import GetCurrentLineVisualisation from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/GetCurrentLineVisualisation';
import ResetCurrentLineVisualisation from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/ResetCurrentLineVisualisation';
import { ILineSeriesCreateVis } from '../../../../../../src/Interfaces/plotting/Line/ILineSeriesCreateVis';
import { CurveType, LineStyle } from '../../../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';
beforeEach(() => {
    const resetCurrentVis = new ResetCurrentLineVisualisation();
    resetCurrentVis.resetCurrentLineVisual();
});
describe('CreateCurrentLineVisualisation domain component', () => {
    it('Should add the current visualisation to the redux store', () => {
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
        const createCurrentVisual = new CreateCurrentLineVisualisation(currentVisual);
        createCurrentVisual.createCurrentLineVisual();
        const getCurrentVisual = new GetCurrentLineVisualisation();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual(currentVisual);
    });
});
