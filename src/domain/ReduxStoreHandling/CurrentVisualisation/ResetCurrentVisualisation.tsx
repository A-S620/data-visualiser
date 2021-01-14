import { store } from '../../../ReduxStore/store';
import { resetCurrentVisual } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetCurrentVisualisation {
    public resetCurrentVisualisation() {
        store.dispatch(resetCurrentVisual());
    }
}
