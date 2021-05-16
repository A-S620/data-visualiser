import { AreaSeriesCreateVis } from '../../../Domain/Visualisations/AreaSeries/AreaSeriesCreateVis';
import CurrentAreaVis from '../../../Domain/ReduxStoreHandling/Plotting/Area/CurrentAreaVis';

export class AreaSeriesVisHandler {
    public createVisual() {
        const createVis = new AreaSeriesCreateVis().createVis();
        const currentVisual = new CurrentAreaVis();
        currentVisual.create(createVis);
    }
    public reset() {
        new CurrentAreaVis().reset();
    }
}
