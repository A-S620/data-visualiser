import { HeatmapCreateVis } from '../../../Domain/Visualisations/HeatmapSeries/HeatmapCreateVis';
import CreateCurrentHeatmapVisual from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/CreateCurrentHeatmapVisual';
import ResetCurrentHeatmapVisual from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/CurrentHeatmapVisual/ResetCurrentHeatmapVisual';

export class HeatmapVisHandler {
    public createVisual() {
        const createVis = new HeatmapCreateVis().createVis();
        const currentVisual = new CreateCurrentHeatmapVisual(createVis);
        currentVisual.createCurrentVisual();
    }
    public resetHeatmapVisual() {
        new ResetCurrentHeatmapVisual().resetCurrentVisual();
    }
}
