import { LineSeriesCreateVis } from '../../../Domain/Visualisations/LineSeries/LineSeriesCreateVis';
import CurrentLineVisual from '../../../Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';

export class LineSeriesVisHandler {
    public createLineVisual() {
        const createLineVis = new LineSeriesCreateVis().createVis();
        const createCurrentLineVisual = new CurrentLineVisual();
        createCurrentLineVisual.create(createLineVis);
    }
    public resetLineVisual() {
        new CurrentLineVisual().reset();
    }
}
