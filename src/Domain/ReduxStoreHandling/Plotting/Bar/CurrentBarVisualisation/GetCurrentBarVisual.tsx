import { store } from '../../../../../ReduxStore/store';
import { IBarSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesCreateVis';
export default class GetCurrentBarVisual {
    public getCurrentBarVisual(): IBarSeriesCreateVis {
        return store.getState().currentBarVisualisation;
    }
}
