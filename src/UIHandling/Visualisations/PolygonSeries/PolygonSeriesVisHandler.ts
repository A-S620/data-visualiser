import { PolygonSeriesCreateVis } from '../../../Domain/Visualisations/PolygonSeries/PolygonSeriesCreateVis';
import CurrentPolygonVis from '../../../Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVis';

export class PolygonSeriesVisHandler {
    public createVisual() {
        const createVis = new PolygonSeriesCreateVis().createVis();
        const currentVisual = new CurrentPolygonVis();
        currentVisual.create(createVis);
    }
    public reset() {
        new CurrentPolygonVis().reset();
    }
}
