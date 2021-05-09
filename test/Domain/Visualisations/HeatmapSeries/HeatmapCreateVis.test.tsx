import 'jsdom-global/register';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { HeatmapCreateVis } from '../../../../src/Domain/Visualisations/HeatmapSeries/HeatmapCreateVis';
import { IHeatmapSeriesOptions } from '../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import CreateHeatmapSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/CreateHeatmapSeriesOptions';
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
            { col1: 32, col2: 45 },
            { col1: 32, col2: 45 },
            { col1: 32, col2: 45 },
            { col1: 32, col2: 47 },
            { col1: 79, col2: 5 },
            { col1: 79, col2: 5 },
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
        ignoreFields: [],
        ignoreDataObjects: [],
    };
    const createAnalysedData = new CreateAnalysedData(analysedFileData);
    createAnalysedData.createAll();
});

describe('HeatmapCreateVis domain component', () => {
    it('Should return a default values for the options when no options have been selected', async () => {
        const createVis = new HeatmapCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: 32, y: 45, color: 4 },
            { x: 32, y: 47, color: 1 },
            { x: 79, y: 5, color: 2 },
        ]);
        expect(createVis.height).toEqual(800);
        expect(createVis.width).toEqual(800);
        expect(createVis.stroke).toEqual('black');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.fill).toEqual('black');
        expect(createVis.colour).toEqual('black');
    });
    it('Should return the correct options from the Redux store when valid options have been imported - interval', async () => {
        const options: IHeatmapSeriesOptions = {
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            colour: 'red',
            fill: 'red',
            height: 500,
            opacity: 1,
            stroke: 'red',
            width: 500,
            xValue: 'col1',
            yValue: 'col2',
        };
        const createOptions = new CreateHeatmapSeriesOptions(options);
        createOptions.createHeatmapSeriesOptions();
        const createVis = new HeatmapCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: 32, y: 45, color: 4 },
            { x: 32, y: 47, color: 1 },
            { x: 79, y: 5, color: 2 },
        ]);
        expect(createVis.height).toEqual(500);
        expect(createVis.width).toEqual(500);
        expect(createVis.stroke).toEqual('red');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.fill).toEqual('red');
        expect(createVis.colour).toEqual('red');
        expect(createVis.colourRange).toEqual({
            colour1: 'red',
            colour2: 'green',
        });
    });
});
