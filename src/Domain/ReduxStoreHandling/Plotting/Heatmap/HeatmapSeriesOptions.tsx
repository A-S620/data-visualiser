import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addHeatmapOptions, resetHeatmapOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesOptions } from '../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';

export default class HeatmapSeriesOptions {
    public create(options: IHeatmapSeriesOptions) {
        reduxStore.dispatch(addHeatmapOptions(options));
    }
    public get(): IHeatmapSeriesOptions {
        return reduxStore.getState().heatmapSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetHeatmapOptions());
    }
}
