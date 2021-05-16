import React from 'react';
import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
import PolygonSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/PolygonSeriesOptions';
import { PolygonSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/PolygonSeries/PolygonSeriesVisHandler';
import CurrentPolygonVis from '../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVis';
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
    new PolygonSeriesOptions().create({
        colour: '',
        height: 500,
        width: 500,
        xValue: 'col1',
        yValue: 'col2',
    });
});
afterAll(() => {
    new PolygonSeriesOptions().reset();
});
describe('PolygonSeriesVis UIHandling Component', () => {
    it('Should return the visualisation options when the createVisual method is called', () => {
        new PolygonSeriesVisHandler().createVisual();
        expect(new CurrentPolygonVis().get()).toEqual({
            data: [
                { x: 79, y: 5 },
                { x: 76, y: 23 },
            ],
            height: 500,
            width: 500,
            colour: '',
        });
    });
    it('Should reset when the reset method is called', () => {
        new PolygonSeriesVisHandler().reset();
        expect(new CurrentPolygonVis().get()).toEqual({});
    });
});
