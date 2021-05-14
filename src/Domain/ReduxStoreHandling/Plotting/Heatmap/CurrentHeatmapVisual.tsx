import { store } from '../../../../ReduxStore/store';
import { addCurrentHeatmapVisual, resetCurrentHeatmapVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesVis } from '../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesVis';

export default class CurrentHeatmapVisual {
    public create(currentVisual: IHeatmapSeriesVis) {
        store.dispatch(addCurrentHeatmapVisual(currentVisual));
    }
    public get(): IHeatmapSeriesVis {
        return store.getState().currentHeatmapVisual;
    }
    public reset() {
        store.dispatch(resetCurrentHeatmapVisual());
    }
}
