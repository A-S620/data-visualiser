import { store } from '../../../../ReduxStore/store';
import { addCurrentLineVisual, resetCurrentLineVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesVis } from '../../../../Interfaces/Visualisations/Line/ILineSeriesVis';

export default class CurrentLineVisual {
    public create(currentVisual: ILineSeriesVis) {
        store.dispatch(addCurrentLineVisual(currentVisual));
    }
    public get(): ILineSeriesVis {
        return store.getState().currentLineVisual;
    }
    public reset() {
        store.dispatch(resetCurrentLineVisual());
    }
}
