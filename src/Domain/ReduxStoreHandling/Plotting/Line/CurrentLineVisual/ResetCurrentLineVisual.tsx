import { store } from '../../../../../ReduxStore/store';
import { resetCurrentLineVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
export default class ResetCurrentLineVisual {
    public resetCurrentLineVisual() {
        store.dispatch(resetCurrentLineVisual());
    }
}
