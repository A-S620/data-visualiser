import { store } from '../../../ReduxStore/store';
import { resetCurrentLineVisual } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetCurrentLineVisualisation {
    public resetCurrentLineVisual() {
        store.dispatch(resetCurrentLineVisual());
    }
}
