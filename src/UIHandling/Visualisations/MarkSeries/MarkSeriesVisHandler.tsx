import { MarkSeriesCreateVis } from '../../../Domain/Visualisations/MarkSeries/MarkSeriesCreateVis';
import CreateCurrentMarkVisual from '../../../Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/CreateCurrentMarkVisual';
import ResetCurrentMarkVisual from '../../../Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/ResetCurrentMarkVisual';

export class MarkSeriesVisHandler {
    public createVisual() {
        const createVis = new MarkSeriesCreateVis().createVis();
        const currentVisual = new CreateCurrentMarkVisual(createVis);
        currentVisual.createCurrentMarkVisual();
    }
    public resetLineVisual() {
        new ResetCurrentMarkVisual().resetCurrentMarkVisual();
    }
}
