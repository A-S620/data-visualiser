import 'jsdom-global/register';
import { BarSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/BarSeries/BarSeriesVisHandler';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import { yValue } from '../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import CurrentBarVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual';
import BarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';

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
    new ImportedData().create(testData);
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.NOMINAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new BarSeriesOptions().create({
        barWidth: 1,
        colour: '000000',
        fill: '000000',
        height: 500,
        opacity: 1,
        stroke: '000000',
        width: 500,
        xValue: 'col1',
        yValue: yValue.count,
    });
});
afterAll(() => {
    new BarSeriesOptions().reset();
});
describe('BarSeriesVisHandler domain component', () => {
    it('Should return the visualisation options when the createBarVisual method is called', () => {
        new BarSeriesVisHandler().createBarVisual();
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
