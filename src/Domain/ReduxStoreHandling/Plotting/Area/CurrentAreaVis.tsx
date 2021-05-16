import { store } from '../../../../ReduxStore/store';
import { addCurrentAreaVisual, resetCurrentAreaVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IAreaSeriesVis } from '../../../../Interfaces/Visualisations/Area/IAreaSeriesVis';

export default class CurrentAreaVis {
    public create(currentVisual: IAreaSeriesVis) {
        store.dispatch(addCurrentAreaVisual(currentVisual));
    }
    public get(): IAreaSeriesVis {
        return store.getState().currentAreaVisual;
    }
    public reset() {
        store.dispatch(resetCurrentAreaVisual());
    }
}
