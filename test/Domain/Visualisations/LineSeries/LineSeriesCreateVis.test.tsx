import React from 'react';
import 'jsdom-global/register';
import CreateLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import { CurveType, ILineSeriesOptions, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';
import { LineSeriesCreateVis } from '../../../../src/Domain/Visualisations/LineSeries/LineSeriesCreateVis';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';

beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ],
        intervalFields: ['col1', 'col2'],
        intervalDataObjects: [
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ],
        nominalFields: ['col3'],
        nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
        ordinalFields: [],
        ordinalDataObjects: [],
    };
    const createAnalysedData = new CreateAnalysedData(analysedFileData);
    createAnalysedData.createIntervalFields();
    createAnalysedData.createIntervalDataObjects();
    createAnalysedData.createFields();
});
describe('LineSeriesCreateVis domain component', () => {
    describe('Visualisation Options', () => {
        it('Should return a default values for the options when no options have been selected', async () => {
            const createVis = new LineSeriesCreateVis().createVis();
            expect(createVis.data).toEqual([
                { x: 32, y: 45 },
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ]);
            expect(createVis.height).toEqual(800);
            expect(createVis.width).toEqual(800);
            expect(createVis.stroke).toEqual('#000000');
            expect(createVis.opacity).toEqual(1);
            expect(createVis.curveType).toEqual(null);
            expect(createVis.lineStyle).toEqual(undefined);
            expect(createVis.lineWidth).toEqual(2);
        });
        it('Should return the correct options from the Redux store when valid options have been imported', async () => {
            const lineOptions: ILineSeriesOptions = {
                xValue: 'col1',
                yValue: 'col2',
                height: 500,
                width: 500,
                stroke: '#cd3b55',
                opacity: 0,
                curveType: CurveType.curveMonotoneY,
                lineStyle: LineStyle.SOLID,
                lineWidth: 2,
            };
            const createLineSeriesOptions = new CreateLineSeriesOptions(lineOptions);
            await createLineSeriesOptions.createLineSeriesOptions();

            const createVis = new LineSeriesCreateVis().createVis();
            expect(createVis.data).toEqual([
                { x: 32, y: 45 },
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ]);
            expect(createVis.height).toEqual(500);
            expect(createVis.width).toEqual(500);
            expect(createVis.stroke).toEqual('#cd3b55');
            expect(createVis.opacity).toEqual(0);
            expect(createVis.curveType).toEqual(CurveType.curveMonotoneY);
            expect(createVis.lineStyle).toEqual(LineStyle.SOLID);
            expect(createVis.lineWidth).toEqual(2);
        });
    });
    describe('Data', () => {
        it('Should return example data when no data has been selected', () => {});
    });
});
