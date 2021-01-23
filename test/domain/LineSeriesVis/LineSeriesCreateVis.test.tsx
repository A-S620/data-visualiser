import React from 'react';
import 'jsdom-global/register';
import CreateLinePlotOptions from '../../../src/domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlotOptions';
import { LineSeriesCreateVis } from '../../../src/domain/LineSeriesVis/LineSeriesCreateVis';
import { IImportedFileData } from '../../../src/interfaces/import/IImportedFileData';
import CreateImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseIntervalData } from '../../../src/domain/ImportedFile/DataAnalysis/AnalyseIntervalData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { AnalyseFileData } from '../../../src/domain/ImportedFile/AnalyseFileData';
import { FieldTypes, IAnalysedFileData } from '../../../src/interfaces/import/IAnalysedFileData';
import CreateAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';

beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
        ],
        intervalFields: ['col1', 'col2'],
        intervalDataAsObjects: [
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ],
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
            expect(createVis.colour).toEqual('#000000');
            expect(createVis.opacity).toEqual(1);
            expect(createVis.curveType).toEqual(null);
            expect(createVis.lineStyle).toEqual(undefined);
            expect(createVis.lineWidth).toEqual(2);
        });
        it('Should return the correct options from the Redux store when valid options have been imported', async () => {
            const lineOptions: ILinePlotOptions = {
                xValue: 'col1',
                yValue: 'col2',
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

            const createVis = new LineSeriesCreateVis().createVis();
            expect(createVis.data).toEqual([
                { x: 32, y: 45 },
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ]);
            expect(createVis.height).toEqual(500);
            expect(createVis.width).toEqual(500);
            expect(createVis.colour).toEqual('#cd3b55');
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
