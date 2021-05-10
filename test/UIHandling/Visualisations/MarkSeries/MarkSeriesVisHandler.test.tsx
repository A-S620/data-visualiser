import React from 'react';
import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateMarkSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/CreateMarkSeriesOptions';
import ResetMarkSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/ResetMarkSeriesOptions';
import { MarkSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/MarkSeries/MarkSeriesVisHandler';
import CurrentMarkVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual';
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
    const createImportedData = new CreateImportedData(testData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.INTERVAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new CreateMarkSeriesOptions({
        colour: '',
        fill: '',
        height: 500,
        opacity: 1,
        stroke: '',
        width: 500,
        xValue: 'col1',
        yValue: 'col2',
    }).createMarkSeriesOptions();
});
afterAll(() => {
    new ResetMarkSeriesOptions().resetMarkSeriesOptions();
});
describe('MarkSeriesVis UIHandling Component', () => {
    it('Should return the visualisation options when the createMrkVisual method is called', () => {
        new MarkSeriesVisHandler().createVisual();
        expect(new CurrentMarkVisual().get()).toEqual({
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            stroke: '',
            opacity: 1,
            colour: '',
            fill: '',
        });
    });
    it('Should reset the MarkSeriesVisual when the reset method is called', () => {
        new MarkSeriesVisHandler().reset();
        expect(new CurrentMarkVisual().get()).toEqual({});
    });
});
