import { store } from '../../../../../ReduxStore/store';
import { resetHeatmapOptions } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetHeatmapSeriesOptions {
    public resetHeatmapSeriesOptions() {
        store.dispatch(resetHeatmapOptions());
    }
}
