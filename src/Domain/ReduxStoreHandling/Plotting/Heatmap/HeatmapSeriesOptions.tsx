import { store } from '../../../../ReduxStore/store';
import { addHeatmapOptions, resetHeatmapOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesOptions } from '../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';

export default class HeatmapSeriesOptions {
    public create(options: IHeatmapSeriesOptions) {
        store.dispatch(addHeatmapOptions(options));
    }
    public get(): IHeatmapSeriesOptions {
        return store.getState().heatmapSeriesOptions;
    }
    public reset() {
        store.dispatch(resetHeatmapOptions());
    }
}
