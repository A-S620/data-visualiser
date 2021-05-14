import React from 'react';
import 'jsdom-global/register';
import { BarSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/BarSeries/BarSeriesVisHandler';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import { yValue } from '../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import ResetBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import CurrentBarVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual';

beforeAll(() => {
    const testData: IImportedFileData = {
        dataFields: ['col1', 'col2', 'col3'],
        dataObjects: [
            { col1: 'hot', col2: 'red', col3: 'foo' },
            { col1: 'cold', col2: 'green', col3: 'foo' },
            { col1: 'warm', col2: 'yellow', col3: 'foo' },
        ],
        dataArrays: [],
    };
    const createImportedData = new CreateImportedData(testData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.NOMINAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new CreateBarSeriesOptions({
        barWidth: 1,
        colour: '000000',
        fill: '000000',
        height: 500,
        opacity: 1,
        stroke: '000000',
        width: 500,
        xValue: 'col1',
        yValue: yValue.count,
    }).createBarSeriesOptions();
});
afterAll(() => {
    new ResetBarSeriesOptions().resetBarSeriesOptions();
});
describe('BarSeriesVisHandler domain component', () => {
    it('Should return the visualisation options when the createBarVisual method is called', () => {
        const barVisHandler = new BarSeriesVisHandler().createBarVisual();
        const getCurrentVisual = new CurrentBarVisual().get();
        expect(getCurrentVisual).toEqual({
            data: [
                { x: 'hot', y: 1 },
                { x: 'cold', y: 1 },
                { x: 'warm', y: 1 },
            ],
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
        });
    });
    it('Should reset the LinePlotOptions when the reset method is called', () => {
        new BarSeriesVisHandler().resetBarVisual();
        const getCurrentVisual = new CurrentBarVisual();

        expect(getCurrentVisual.get()).toEqual({});
    });
});
