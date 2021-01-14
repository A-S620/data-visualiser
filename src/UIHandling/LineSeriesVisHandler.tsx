import { LineSeriesCreateVis } from '../domain/LineSeriesVis/LineSeriesCreateVis';
import CreateCurrentVisualisation from '../domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import ResetCurrentVisualisation from '../domain/ReduxStoreHandling/CurrentVisualisation/ResetCurrentVisualisation';

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
