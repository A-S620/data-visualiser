import { LineSeriesCreateVis } from '../Domain/LineSeriesVis/LineSeriesCreateVis';
import CreateCurrentLineVisualisation from '../Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/CreateCurrentLineVisualisation';
import ResetCurrentLineVisualisation from '../Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisualisation/ResetCurrentLineVisualisation';

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
