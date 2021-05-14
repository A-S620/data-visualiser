import { store } from '../../../../../ReduxStore/store';
import { IBarSeriesVis } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesVis';
export default class GetCurrentBarVisual {
    public getCurrentBarVisual(): IBarSeriesVis {
        return store.getState().currentBarVisual;
    }
}
