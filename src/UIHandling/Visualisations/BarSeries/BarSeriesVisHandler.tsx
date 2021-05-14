import { BarSeriesCreateVis } from '../../../Domain/Visualisations/BarSeries/BarSeriesCreateVis';
import CurrentBarVisual from '../../../Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual';

export class BarSeriesVisHandler {
    public createBarVisual() {
        const createBarVis = new BarSeriesCreateVis().createVis();
        const createCurrentBarVisual = new CurrentBarVisual();
        createCurrentBarVisual.create(createBarVis);
    }
    public resetBarVisual() {
        new CurrentBarVisual().reset();
    }
}
