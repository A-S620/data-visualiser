import { RadialSeriesCreateVis } from '../../../Domain/Visualisations/RadialSeries/RadialSeriesCreateVis';
import CurrentRadialVisual from '../../../Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';

export class RadialSeriesVisHandler {
    public createVisual() {
        const createVis = new RadialSeriesCreateVis().createVis();
        const currentVisual = new CurrentRadialVisual();
        currentVisual.create(createVis);
    }
    public reset() {
        new CurrentRadialVisual().reset();
    }
}
