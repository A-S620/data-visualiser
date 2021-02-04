import { LineSeriesCreateVis } from '../Domain/Visualisations/LineSeries/LineSeriesCreateVis';
import CreateCurrentLineVisual from '../Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/CreateCurrentLineVisual';
import ResetCurrentLineVisual from '../Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/ResetCurrentLineVisual';

export class LineSeriesVisHandler {
    public createLineVisual() {
        const createLineVis = new LineSeriesCreateVis().createVis();
        const createCurrentLineVisual = new CreateCurrentLineVisual(createLineVis);
        createCurrentLineVisual.createCurrentLineVisual();
    }
    public resetLineVisual() {
        new ResetCurrentLineVisual().resetCurrentLineVisual();
    }
}
