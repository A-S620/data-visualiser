import React from 'react';
import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import { HeatmapVisHandler } from '../../../../src/UIHandling/Visualisations/HeatmapSeries/HeatmapVisHandler';
import MarkSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';
import HeatmapSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions';
import CurrentHeatmapVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
beforeAll(() => {
    const testData: IImportedFileData = {
        dataFields: ['col1', 'col2', 'col3'],
        dataObjects: [
            { col1: '32', col2: 'cool', col3: 'foo' },
            { col1: '79', col2: '5', col3: 'foo' },
            { col1: '76', col2: '23', col3: 'foo' },
        ],
        dataArrays: [],
    };
    new ImportedData().create(testData);
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.INTERVAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new HeatmapSeriesOptions().create({
        colourRange: {
            colour1: '',
            colour2: '',
        },
        colour: '',
        fill: '',
        height: 500,
        opacity: 1,
        stroke: '',
        width: 500,
        xValue: 'col1',
        yValue: 'col2',
    });
});
afterAll(() => {
    new MarkSeriesOptions().reset();
});
describe('HeatmapVis UIHandling Component', () => {
    it('Should return the visualisation options when the createHeatmapVisual method is called', () => {
        new HeatmapVisHandler().createVisual();
        expect(new CurrentHeatmapVisual().get()).toEqual({
            data: [
                { x: 79, y: 5, color: 1 },
                { x: 76, y: 23, color: 1 },
            ],
            colourRange: {
                colour1: '',
                colour2: '',
            },
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
        });
    });
    it('Should reset the HeatmapVisHandler when the reset method is called', () => {
        new HeatmapVisHandler().resetHeatmapVisual();
        expect(new CurrentHeatmapVisual().get()).toEqual({});
    });
});
