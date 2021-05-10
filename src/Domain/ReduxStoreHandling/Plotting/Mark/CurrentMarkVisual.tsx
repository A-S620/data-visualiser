import { store } from '../../../../ReduxStore/store';
import { addCurrentMarkVisual, resetCurrentMarkVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesCreateVis } from '../../../../Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';

export default class CurrentMarkVisual {
    public create(currentVisual: IMarkSeriesCreateVis) {
        store.dispatch(addCurrentMarkVisual(currentVisual));
    }
    public get(): IMarkSeriesCreateVis {
        return store.getState().currentMarkVisual;
    }
    public reset() {
        store.dispatch(resetCurrentMarkVisual());
    }
}
