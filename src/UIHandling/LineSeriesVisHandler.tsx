import { LineSeriesCreateVis } from '../Domain/LineSeriesVis/LineSeriesCreateVis';
import CreateCurrentLineVisualisation from '../Domain/ReduxStoreHandling/CurrentLineVisualisation/CreateCurrentLineVisualisation';
import ResetCurrentLineVisualisation from '../Domain/ReduxStoreHandling/CurrentLineVisualisation/ResetCurrentLineVisualisation';

export class LineSeriesVisHandler {
    public createLineVisual() {
        const createLineVis = new LineSeriesCreateVis().createVis();
        const createCurrentLineVisual = new CreateCurrentLineVisualisation(createLineVis);
        createCurrentLineVisual.createCurrentLineVisual();
    }
    public resetLineVisual() {
        new ResetCurrentLineVisualisation().resetCurrentLineVisual();
    }
}
