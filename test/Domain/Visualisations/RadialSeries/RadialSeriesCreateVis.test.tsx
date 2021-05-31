import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { IRadialSeriesOptions } from '../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import RadialSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import { RadialSeriesCreateVis } from '../../../../src/Domain/Visualisations/RadialSeries/RadialSeriesCreateVis';

beforeAll(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
            { field: 'col5', fieldType: FieldTypes.BINARY },
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
        binaryFields: ['col5'],
        binaryDataObjects: [
            {
                col5: [
                    { name: 'yes', count: 1, percent: 25 },
                    { name: 'no', count: 3, percent: 75 },
                ],
            },
        ],
        ignoreFields: [],
        ignoreDataObjects: [],
    };
    const createAnalysedData = new CreateAnalysedData(analysedFileData);
    createAnalysedData.createAll();
});

describe('RadialSeriesCreateVis domain component', () => {
    it('Should return a default values for the options when no options have been selected', async () => {
        const createVis = new RadialSeriesCreateVis().createVis();
        expect(createVis.data).toEqual([]);
        expect(createVis.height).toEqual(0);
        expect(createVis.width).toEqual(0);
    });
    it('Should return the correct options from the Redux store when valid options have been imported - nominal', async () => {
        const options: IRadialSeriesOptions = {
            column: 'col3',
            height: 500,
            width: 500,
        };
        const radialSeriesOptions = new RadialSeriesOptions();
        await radialSeriesOptions.create(options);
        const seriesVis = new RadialSeriesCreateVis().createVis();

        expect(seriesVis.data).toEqual([
            { angle: 25, label: 'foo' },
            { angle: 25, label: 'bar' },
            { angle: 50, label: 'tob' },
        ]);
        expect(seriesVis.height).toEqual(500);
        expect(seriesVis.width).toEqual(500);
    });
    it('Should return the correct options from the Redux store when valid options have been imported - ordinal', async () => {
        const options: IRadialSeriesOptions = {
            column: 'col4',
            height: 500,
            width: 500,
        };
        const radialSeriesOptions = new RadialSeriesOptions();
        await radialSeriesOptions.create(options);
        const seriesVis = new RadialSeriesCreateVis().createVis();

        expect(seriesVis.data).toEqual([
            { angle: 25, label: '10-20' },
            { angle: 25, label: '20-30' },
            { angle: 50, label: '30-40' },
        ]);
        expect(seriesVis.height).toEqual(500);
        expect(seriesVis.width).toEqual(500);
    });
    it('Should return the correct options from the Redux store when valid options have been imported - binary', async () => {
        const options: IRadialSeriesOptions = {
            column: 'col5',
            height: 500,
            width: 500,
        };
        const radialSeriesOptions = new RadialSeriesOptions();
        await radialSeriesOptions.create(options);
        const seriesVis = new RadialSeriesCreateVis().createVis();

        expect(seriesVis.data).toEqual([
            { angle: 25, label: 'yes' },
            { angle: 75, label: 'no' },
        ]);
        expect(seriesVis.height).toEqual(500);
        expect(seriesVis.width).toEqual(500);
    });
});
