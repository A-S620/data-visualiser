import { store } from '../../../../../ReduxStore/store';
import { resetCurrentBarVisual } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetCurrentBarVisual {
    public resetCurrentBarVisual() {
        store.dispatch(resetCurrentBarVisual());
    }
}
