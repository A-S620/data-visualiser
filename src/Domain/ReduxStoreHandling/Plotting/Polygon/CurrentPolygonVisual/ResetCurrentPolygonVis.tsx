import { store } from '../../../../../ReduxStore/store';
import { resetCurrentPolygonVisual } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetCurrentPolygonVis {
    public reset() {
        store.dispatch(resetCurrentPolygonVisual());
    }
}
