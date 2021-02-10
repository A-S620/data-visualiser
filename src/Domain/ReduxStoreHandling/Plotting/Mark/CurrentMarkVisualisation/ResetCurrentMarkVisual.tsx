import { store } from '../../../../../ReduxStore/store';
import { resetCurrentMarkVisual } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetCurrentMarkVisual {
    public resetCurrentMarkVisual() {
        store.dispatch(resetCurrentMarkVisual());
    }
}
