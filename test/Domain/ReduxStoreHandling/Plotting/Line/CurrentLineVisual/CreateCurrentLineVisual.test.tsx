import 'jsdom-global/register';
import React from 'react';

import CreateCurrentLineVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/CreateCurrentLineVisual';
import GetCurrentLineVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/GetCurrentLineVisual';
import ResetCurrentLineVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/ResetCurrentLineVisual';
import { ILineSeriesCreateVis } from '../../../../../../src/Interfaces/plotting/Line/ILineSeriesCreateVis';
import { CurveType, LineStyle } from '../../../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';
beforeEach(() => {
    const resetCurrentVis = new ResetCurrentLineVisual();
    resetCurrentVis.resetCurrentLineVisual();
});
describe('CreateCurrentLineVisual domain component', () => {
    it('Should add the current line visualisation to the redux store', () => {
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
