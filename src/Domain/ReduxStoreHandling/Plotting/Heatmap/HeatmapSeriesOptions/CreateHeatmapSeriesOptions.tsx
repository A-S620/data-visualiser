import { store } from '../../../../../ReduxStore/store';
import { addHeatmapOptions } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesOptions } from '../../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';

export default class CreateHeatmapSeriesOptions {
    private options: IHeatmapSeriesOptions;

    constructor(options: IHeatmapSeriesOptions) {
        this.options = options;
    }
    public createHeatmapSeriesOptions() {
        store.dispatch(addHeatmapOptions(this.options));
    }
}
