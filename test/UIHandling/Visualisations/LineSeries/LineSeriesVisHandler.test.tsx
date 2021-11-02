import 'jsdom-global/register';
import { LineSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/LineSeries/LineSeriesVisHandler';
import { CurveType, LineStyle } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CurrentLineVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import LineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions';
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
    new LineSeriesOptions().create({
        xValue: 'col1',
        yValue: 'col2',
        height: 500,
        width: 500,
        stroke: '000000',
        opacity: 0.5,
        curveType: CurveType.curveMonotoneY,
        lineStyle: LineStyle.SOLID,
        lineWidth: 2,
    });
});
afterAll(() => {
    new LineSeriesOptions().reset();
});
describe('LineSeriesVis UIHandling Component', () => {
    it('Should return the visualisation options when the createLineVisual method is called', () => {
        new LineSeriesVisHandler().createLineVisual();
        const getCurrentVisual = new CurrentLineVisual().get();
        expect(getCurrentVisual).toEqual({
            data: [
                { x: 76, y: 23 },
                { x: 79, y: 5 },
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
    it('Should reset the LinePlotOptions when the reset method is called', () => {
        new LineSeriesVisHandler().resetLineVisual();
        const getCurrentVisual = new CurrentLineVisual().get();
        expect(getCurrentVisual).toEqual({});
    });
});
