import React from 'react';
import 'jsdom-global/register';
import CreateLinePlotOptions from '../../../src/domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/interfaces/plotting/ILinePlotOptions';
import { LineSeriesCreateVis } from '../../../src/domain/LineSeriesVis/LineSeriesCreateVis';
import { IImportedFileData } from '../../../src/interfaces/import/IImportedFileData';
import CreateImportedData from '../../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseFileData } from '../../../src/domain/ImportedFile/AnalyseFileData';
import GetAnalysedData from '../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

//Test data
const dataAsObjects = [
    { col1: '32', col2: 'cool', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];

beforeAll(() => {
    const testData: IImportedFileData = {
        dataFields: dataFields,
        dataAsObjects: dataAsObjects,
        dataAsArrays: [],
    };
    const createImportedData = new CreateImportedData(testData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
    const analyseData = new AnalyseFileData();
    analyseData.validate();
});
describe('LineSeriesCreateVis domain component', () => {
    describe('Visualisation Options', () => {
        it('Should return a default values for the options when no options have been selected', async () => {
            const createVis = new LineSeriesCreateVis().createVis();
            expect(createVis.data).toEqual([
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ]);
            expect(createVis.height).toEqual(400);
            expect(createVis.width).toEqual(400);
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
