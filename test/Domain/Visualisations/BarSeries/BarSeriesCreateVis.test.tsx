import React from 'react';
import 'jsdom-global/register';
import CreateBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import { IBarSeriesOptions, yValue } from '../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { BarSeriesCreateVis } from '../../../../src/Domain/Visualisations/BarSeries/BarSeriesCreateVis';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';

beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
        ],
        intervalFields: ['col1', 'col2'],
        intervalDataObjects: [
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ],
        nominalFields: ['col3'],
        nominalDataObjects: [
            {
                col3: [
                    { name: 'foo', count: 1, percent: 25 },
                    { name: 'bar', count: 1, percent: 25 },
                    { name: 'tob', count: 2, percent: 50 },
                ],
            },
        ],
        ordinalFields: ['col4'],
        ordinalDataObjects: [
            {
                col4: [
                    { name: '10-20', count: 1, percent: 25 },
                    { name: '20-30', count: 1, percent: 25 },
                    { name: '30-40', count: 2, percent: 50 },
                ],
            },
        ],
        binaryFields: [],
        binaryDataObjects: [],
    };
    const createAnalysedData = new CreateAnalysedData(analysedFileData);
    createAnalysedData.createNominalFields();
    createAnalysedData.createNominalDataObjects();
    createAnalysedData.createOrdinalDataObjects();
    createAnalysedData.createOrdinalFields();
    createAnalysedData.createFields();
});
describe('BarSeriesCreateVis domain component', () => {
    it('Should return a default values for the options when no options have been selected', async () => {
        const createVis = new BarSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([{ x: 'foo', y: 25 }]);
        expect(createVis.height).toEqual(800);
        expect(createVis.width).toEqual(800);
        expect(createVis.stroke).toEqual('#000000');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.fill).toEqual('#000000');
        expect(createVis.colour).toEqual('#000000');
        expect(createVis.barWidth).toEqual(0.5);
    });
    it('Should return the correct options from the Redux store when valid options have been imported - nominal', async () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 1,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'col3',
            yValue: yValue.percent,
        };
        const creatBarSeriesOptions = new CreateBarSeriesOptions(barOptions);
        await creatBarSeriesOptions.createBarSeriesOptions();
        const createVis = new BarSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: 'foo', y: 25 },
            { x: 'bar', y: 25 },
            { x: 'tob', y: 50 },
        ]);
        expect(createVis.height).toEqual(100);
        expect(createVis.width).toEqual(100);
        expect(createVis.stroke).toEqual('cd3b54');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.fill).toEqual('cd3b54');
        expect(createVis.colour).toEqual('cd3b54');
        expect(createVis.barWidth).toEqual(1);
    });
    it('Should return the correct options from the Redux store when valid options have been imported - ordinal', async () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 1,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'col4',
            yValue: yValue.percent,
        };
        const creatBarSeriesOptions = new CreateBarSeriesOptions(barOptions);
        await creatBarSeriesOptions.createBarSeriesOptions();
        const createVis = new BarSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: '10-20', y: 25 },
            { x: '20-30', y: 25 },
            { x: '30-40', y: 50 },
        ]);
        expect(createVis.height).toEqual(100);
        expect(createVis.width).toEqual(100);
        expect(createVis.stroke).toEqual('cd3b54');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.fill).toEqual('cd3b54');
        expect(createVis.colour).toEqual('cd3b54');
        expect(createVis.barWidth).toEqual(1);
    });
});
