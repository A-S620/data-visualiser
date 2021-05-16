import 'jsdom-global/register';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { AreaSeriesCreateVis } from '../../../../src/Domain/Visualisations/AreaSeries/AreaSeriesCreateVis';
import { IAreaSeriesOptions } from '../../../../src/Interfaces/Visualisations/Area/IAreaSeriesOptions';
import AreaSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Area/AreaSeriesOptions';
import { CurveType } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

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
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
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

describe('AreaSeriesCreateVis domain component', () => {
    it('Should return a default values for the options when no options have been selected', async () => {
        const createVis = new AreaSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: 32, y: 45 },
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ]);
        expect(createVis.height).toEqual(800);
        expect(createVis.width).toEqual(800);
        expect(createVis.fill).toEqual('#000000');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.curveType).toEqual(CurveType.curveLinear);
        expect(createVis.stroke).toEqual('#000000');
    });
    it('Should return the correct options from the Redux store when valid options have been imported - interval', async () => {
        const options: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            fill: 'red',
            opacity: 1,
            stroke: 'blue',
            height: 500,
            width: 500,
            xValue: 'col1',
            yValue: 'col2',
        };
        new AreaSeriesOptions().create(options);
        const createVis = new AreaSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([
            { x: 32, y: 45 },
            { x: 79, y: 5 },
            { x: 76, y: 23 },
        ]);
        expect(createVis.height).toEqual(500);
        expect(createVis.width).toEqual(500);
        expect(createVis.fill).toEqual('red');
        expect(createVis.stroke).toEqual('blue');
        expect(createVis.opacity).toEqual(1);
        expect(createVis.curveType).toEqual(CurveType.curveLinear);
    });
});
