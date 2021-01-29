import React from 'react';
import 'jsdom-global/register';
import CreateLinePlotOptions from '../../src/Domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import ResetLinePlotOptions from '../../src/Domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';
import { LineSeriesVisHandler } from '../../src/UIHandling/LineSeriesVisHandler';
import { CurveType, ILinePlotOptions, LineStyle } from '../../src/Interfaces/plotting/ILinePlotOptions';
import { IImportedFileData } from '../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import GetCurrentVisualisation from '../../src/Domain/ReduxStoreHandling/CurrentVisualisation/GetCurrentVisualisation';
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
const testOptions: ILinePlotOptions = {
    xValue: 'col1',
    yValue: 'col2',
    height: 500,
    width: 500,
    colour: '000000',
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
            lineWidth: 2,
        });
    });
    it('Should reset the LinePlotOptions when teh reset method is called', () => {
        new LineSeriesVisHandler().resetVisualisation();
        const getCurrentVisual = new GetCurrentVisualisation();
        expect(getCurrentVisual.getCurrentVisualisation()).toEqual({});
    });
});
