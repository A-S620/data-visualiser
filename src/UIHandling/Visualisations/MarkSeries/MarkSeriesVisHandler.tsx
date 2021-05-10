import { MarkSeriesCreateVis } from '../../../Domain/Visualisations/MarkSeries/MarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/CreateCurrentMarkVisual';
import ResetCurrentMarkVisual from '../../../Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisual/ResetCurrentMarkVisual';

export class MarkSeriesVisHandler {
    public createVisual() {
        const createVis = new MarkSeriesCreateVis().createVis();
        const currentVisual = new CreateCurrentMarkVisual(createVis);
        currentVisual.createCurrentMarkVisual();
    }
    public resetMarkVisual() {
        new ResetCurrentMarkVisual().resetCurrentMarkVisual();
    }
}
