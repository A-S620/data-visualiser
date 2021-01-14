import { ILinePlotCreateVis } from '../interfaces/plotting/ILinePlotCreateVis';
import { LineSeriesCreateVis } from '../domain/LineSeriesVis/LineSeriesCreateVis';
import ResetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';
import CreateCurrentVisualisation from '../domain/ReduxStoreHandling/CurrentVisualisation/CreateCurrentVisualisation';
import ResetCurrentVisualisation from '../domain/ReduxStoreHandling/CurrentVisualisation/ResetCurrentVisualisation';
import GetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';

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
