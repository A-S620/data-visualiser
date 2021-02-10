import { store } from '../../../../../ReduxStore/store';
import { IMarkSeriesCreateVis } from '../../../../../Interfaces/plotting/Mark/IMarkSeriesCreateVis';
export default class GetCurrentMarkVisual {
    public getCurrentMarkVisual(): IMarkSeriesCreateVis {
        return store.getState().currentMarkVisualisation;
    }
}
