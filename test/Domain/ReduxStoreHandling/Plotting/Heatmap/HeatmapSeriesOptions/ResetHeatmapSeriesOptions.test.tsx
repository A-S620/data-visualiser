import 'jsdom-global/register';
import { IHeatmapSeriesOptions } from '../../../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import CreateHeatmapSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/CreateHeatmapSeriesOptions';
import GetHeatmapSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/GetHeatmapSeriesOptions';
import ResetHeatmapSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/ResetHeatmapSeriesOptions';

describe('ResetHeatmapSeriesOptions domain component', () => {
    it('Should return the correct heatmap series options', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: ['#cd3b55', '#cd3b55'],
            fill: '#cd3b55',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test2',
        };
        const createOptions = new CreateHeatmapSeriesOptions(options);
        createOptions.createHeatmapSeriesOptions();
        const resetOptions = new ResetHeatmapSeriesOptions();
        resetOptions.resetHeatmapSeriesOptions();
        const getOptions = new GetHeatmapSeriesOptions();
        expect(getOptions.getHeatmapSeriesOptions()).toEqual({});
    });
});
