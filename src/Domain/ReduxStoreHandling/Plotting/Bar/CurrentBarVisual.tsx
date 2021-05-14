import { store } from '../../../../ReduxStore/store';
import { addCurrentBarVisual, resetCurrentBarVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesVis } from '../../../../Interfaces/Visualisations/Bar/IBarSeriesVis';

export default class CurrentBarVisual {
    public create(currentVisual: IBarSeriesVis) {
        store.dispatch(addCurrentBarVisual(currentVisual));
    }
    public get(): IBarSeriesVis {
        return store.getState().currentBarVisual;
    }
    public reset() {
        store.dispatch(resetCurrentBarVisual());
    }
}
