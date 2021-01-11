import React from 'react';
import 'jsdom-global/register';
import CreateLinePlotOptions from '../../../src/domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlotOptions';
import { LineSeriesCreateVis } from '../../../src/domain/LineSeriesVis/LineSeriesCreateVis';
describe('LineSeriesCreateVis domain component', () => {
    describe('Visualisation Options', () => {
        it('Should return a default values for the options when no options have been selected', async () => {
            const createVis = new LineSeriesCreateVis().createVis();
            expect(createVis.height).toEqual(400);
            expect(createVis.width).toEqual(400);
            expect(createVis.colour).toEqual('#000000');
            expect(createVis.opacity).toEqual(1);
            expect(createVis.curveType).toEqual(null);
            expect(createVis.lineStyle).toEqual(undefined);
            expect(createVis.lineWidth).toEqual(2);
        });
        it('Should return the correct options from the Redux state when valid options have been imported', async () => {
            const lineOptions: ILinePlotOptions = {
                xValue: '',
                yValue: 'test2',
                height: 500,
                width: 500,
                colour: '#cd3b55',
                opacity: 0,
                curveType: CurveType.curveMonotoneY,
                lineStyle: LineStyle.SOLID,
                lineWidth: 2,
            };
            const createLinePlotOptions = new CreateLinePlotOptions(lineOptions);
            await createLinePlotOptions.createLinePlotOptions();
        });
    });
    describe('Data', () => {
        it('Should return example data when no data has been selected', () => {});
    });
});
