import React from 'react';
import 'jsdom-global/register';
import CreateLinePlotOptions from '../../src/domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import ResetLinePlotOptions from '../../src/domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';
import { LineSeriesVisHandler } from '../../src/UIHandling/LineSeriesVisHandler';
import { CurveType, ILinePlotOptions, LineStyle } from '../../src/interfaces/plotting/ILinePlotOptions';
import { IImportedFileData } from '../../src/interfaces/import/IImportedFileData';
import CreateImportedData from '../../src/domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseFileData } from '../../src/domain/ImportedFile/AnalyseFileData';
import GetCurrentVisualisation from '../../src/domain/ReduxStoreHandling/CurrentVisualisation/GetCurrentVisualisation';
//Test data
const dataAsObjects = [
    { col1: '32', col2: 'cool', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];
const testOptions: ILinePlotOptions = {
    xValue: 'col1',
    yValue: 'col2',
    height: 500,
    width: 500,
    colour: '000000',
    opacity: 0.5,
    curveType: CurveType.curveMonotoneY,
    lineStyle: LineStyle.SOLID,
};
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
    new CreateLinePlotOptions(testOptions).createLinePlotOptions();
});
afterAll(() => {
    new ResetLinePlotOptions().resetLinePlotOptions();
});
describe('LineSeriesVis UIHandling Component', () => {
    it('Should return the visualisation options when the createVisualisation method is called', () => {
        const lineVisHandler = new LineSeriesVisHandler().createVisualisation();
        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual({
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
        });
    });
    it('Should reset the LinePlotOptions when the reset method is called', () => {
        new LineSeriesVisHandler().resetVisualisation();
        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual({});
    });
});
