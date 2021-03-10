import { store } from '../../../../../ReduxStore/store';
import { IHeatmapSeriesOptions } from '../../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';

export default class GetHeatmapSeriesOptions {
    public getHeatmapSeriesOptions(): IHeatmapSeriesOptions {
        return store.getState().heatmapSeriesOptions;
    }
}
