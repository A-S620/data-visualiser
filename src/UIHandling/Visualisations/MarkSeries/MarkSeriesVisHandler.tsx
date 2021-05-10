import { MarkSeriesCreateVis } from '../../../Domain/Visualisations/MarkSeries/MarkSeriesCreateVis';
import CurrentMarkVisual from '../../../Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual';

export class MarkSeriesVisHandler {
    public createVisual() {
        const createVis = new MarkSeriesCreateVis().createVis();
        const currentVisual = new CurrentMarkVisual();
        currentVisual.create(createVis);
    }
    public reset() {
        new CurrentMarkVisual().reset();
    }
}
