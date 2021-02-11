import { store } from '../../../../../ReduxStore/store';
import { IMarkSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';
export default class GetCurrentMarkVisual {
    public getCurrentMarkVisual(): IMarkSeriesCreateVis {
        return store.getState().currentMarkVisualisation;
    }
}
