import { HeatmapCreateVis } from '../../../Domain/Visualisations/HeatmapSeries/HeatmapCreateVis';
import CurrentHeatmapVisual from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual';

export class HeatmapVisHandler {
    public createVisual() {
        const createVis = new HeatmapCreateVis().createVis();
        const currentVisual = new CurrentHeatmapVisual();
        currentVisual.create(createVis);
    }
    public resetHeatmapVisual() {
        new CurrentHeatmapVisual().reset();
    }
}
