import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentHeatmapVisual, resetCurrentHeatmapVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesVis } from '../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesVis';

export default class CurrentHeatmapVisual {
    public create(currentVisual: IHeatmapSeriesVis) {
        reduxStore.dispatch(addCurrentHeatmapVisual(currentVisual));
    }
    public get(): IHeatmapSeriesVis {
        return reduxStore.getState().currentHeatmapVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentHeatmapVisual());
    }
}
