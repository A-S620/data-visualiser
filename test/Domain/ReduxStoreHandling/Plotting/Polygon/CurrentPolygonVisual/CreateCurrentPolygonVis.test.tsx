import 'jsdom-global/register';
import React from 'react';
import ResetCurrentMarkVisual from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/ResetCurrentMarkVisual';
import { IPolygonSeriesVis } from '../../../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesVis';
import CreateCurrentPolygonVis from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVisual/CreateCurrentPolygonVis';
import GetCurrentPolygonVis from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVisual/GetCurrentPolygonVis';
import ResetCurrentPolygonVis from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVisual/ResetCurrentPolygonVis';
beforeEach(() => {
    const resetCurrentVis = new ResetCurrentMarkVisual();
    resetCurrentVis.resetCurrentMarkVisual();
});

describe('CreateCurrentPolygonVisual domain component', () => {
    it('Should add the current polygon visualisation to the redux store', () => {
        const currentVisual: IPolygonSeriesVis = {
            colour: '',
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 0,
            width: 0,
        };
        const createCurrentVisual = new CreateCurrentPolygonVis(currentVisual);
        createCurrentVisual.create();
        const getCurrentVisual = new GetCurrentPolygonVis();
        expect(getCurrentVisual.get()).toEqual(currentVisual);
        const resetCurrentVis = new ResetCurrentPolygonVis();
        resetCurrentVis.reset();
        expect(getCurrentVisual.get()).toEqual({});
    });
});
