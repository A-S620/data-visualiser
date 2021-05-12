import { store } from '../../../../ReduxStore/store';
import { addCurrentLineVisual, resetCurrentLineVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesCreateVis } from '../../../../Interfaces/Visualisations/Line/ILineSeriesCreateVis';

export default class CurrentLineVisual {
    public create(currentVisual: ILineSeriesCreateVis) {
        store.dispatch(addCurrentLineVisual(currentVisual));
    }
    public get(): ILineSeriesCreateVis {
        return store.getState().currentLineVisual;
    }
    public reset() {
        store.dispatch(resetCurrentLineVisual());
    }
}
