import React from 'react';
import 'jsdom-global/register';
import CreateLineSeriesOptions from '../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import ResetLineSeriesOptions from '../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import { LineSeriesVisHandler } from '../../src/UIHandling/LineSeriesVisHandler';
import { CurveType, ILineSeriesOptions, LineStyle } from '../../src/Interfaces/plotting/Line/ILineSeriesOptions';
import { IImportedFileData } from '../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import GetCurrentLineVisualisation from '../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/GetCurrentLineVisualisation';
import { AnalyseFileData } from '../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../src/Interfaces/Analyse/IAnalysedFileData';
//Test data
const dataObjects = [
    { col1: '32', col2: 'cool', col3: 'foo' },
    { col1: '79', col2: '5', col3: 'foo' },
    { col1: '76', col2: '23', col3: 'foo' },
];
const dataFields = ['col1', 'col2', 'col3'];
const intervalFields = ['col1', 'col2'];
const testOptions: ILineSeriesOptions = {
    xValue: 'col1',
    yValue: 'col2',
    height: 500,
    width: 500,
    stroke: '000000',
    opacity: 0.5,
    curveType: CurveType.curveMonotoneY,
    lineStyle: LineStyle.SOLID,
    lineWidth: 2,
};
beforeAll(() => {
    const testData: IImportedFileData = {
        dataFields: dataFields,
        dataObjects: dataObjects,
        dataArrays: [],
    };
    const createImportedData = new CreateImportedData(testData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.INTERVAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new CreateLineSeriesOptions(testOptions).createLineSeriesOptions();
});
afterAll(() => {
    new ResetLineSeriesOptions().resetLineSeriesOptions();
});
describe('LineSeriesVis UIHandling Component', () => {
    it('Should return the visualisation options when the createLineVisual method is called', () => {
        const lineVisHandler = new LineSeriesVisHandler().createLineVisual();
        const getCurrentVisual = new GetCurrentLineVisualisation();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual({
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
        });
    });
    it('Should reset the LinePlotOptions when teh reset method is called', () => {
        new LineSeriesVisHandler().resetLineVisual();
        const getCurrentVisual = new GetCurrentLineVisualisation();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual({});
    });
});
