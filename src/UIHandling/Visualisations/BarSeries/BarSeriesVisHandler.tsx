import { BarSeriesCreateVis } from '../../../Domain/Visualisations/BarSeries/BarSeriesCreateVis';
import CreateCurrentBarVisual from '../../../Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual/CreateCurrentBarVisual';
import ResetCurrentBarVisual from '../../../Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual/ResetCurrentBarVisual';

export class BarSeriesVisHandler {
    public createBarVisual() {
        const createBarVis = new BarSeriesCreateVis().createVis();
        const createCurrentBarVisual = new CreateCurrentBarVisual(createBarVis);
        createCurrentBarVisual.createCurrentBarVisual();
    }
    public resetBarVisual() {
        new ResetCurrentBarVisual().resetCurrentBarVisual();
    }
}
