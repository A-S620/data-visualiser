import { store } from '../../../../../ReduxStore/store';
import { resetCurrentHeatmapVisual } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetCurrentHeatmapVisual {
    public resetCurrentVisual() {
        store.dispatch(resetCurrentHeatmapVisual());
    }
}
