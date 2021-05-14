import { store } from '../../../../ReduxStore/store';
import { addCurrentMarkVisual, resetCurrentMarkVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesVis } from '../../../../Interfaces/Visualisations/Mark/IMarkSeriesVis';

export default class CurrentMarkVisual {
    public create(currentVisual: IMarkSeriesVis) {
        store.dispatch(addCurrentMarkVisual(currentVisual));
    }
    public get(): IMarkSeriesVis {
        return store.getState().currentMarkVisual;
    }
    public reset() {
        store.dispatch(resetCurrentMarkVisual());
    }
}
