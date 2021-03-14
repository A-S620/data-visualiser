import { store } from '../../../../../ReduxStore/store';
import { addCurrentHeatmapVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IHeatmapSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';

export default class CreateCurrentHeatmapVisual {
    private currentVisual: IHeatmapSeriesCreateVis;
    constructor(currentVisual: IHeatmapSeriesCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentVisual() {
        store.dispatch(addCurrentHeatmapVisual(this.currentVisual));
    }
}
