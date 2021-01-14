import { ILinePlotCreateVis } from '../interfaces/plotting/ILinePlotCreateVis';
import { LineSeriesCreateVis } from '../domain/LineSeriesVis/LineSeriesCreateVis';
import ResetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';

export class LineSeriesVisHandler {
    public createVisualisation(): ILinePlotCreateVis {
        return new LineSeriesCreateVis().createVis();
    }
    public resetVisualisation() {
        new ResetLinePlotOptions().resetLinePlotOptions();
    }
}
