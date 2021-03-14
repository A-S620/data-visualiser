import { store } from '../../../../../ReduxStore/store';
import { IHeatmapSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';
export default class GetCurrentHeatmapVisual {
    public getCurrentVisual(): IHeatmapSeriesCreateVis {
        return store.getState().currentHeatmapVisualisation;
    }
}
