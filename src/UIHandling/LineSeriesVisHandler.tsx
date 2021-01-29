import { LineSeriesCreateVis } from '../Domain/LineSeriesVis/LineSeriesCreateVis';
import CreateCurrentVisualisation from '../Domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import ResetCurrentVisualisation from '../Domain/ReduxStoreHandling/CurrentVisualisation/ResetCurrentVisualisation';

export class LineSeriesVisHandler {
    public createVisualisation() {
        const createVis = new LineSeriesCreateVis().createVis();
        const createCurrentVisual = new CreateCurrentVisualisation(createVis);
        createCurrentVisual.createCurrentVisual();
    }
    public resetVisualisation() {
        new ResetCurrentVisualisation().resetCurrentVisualisation();
    }
}
