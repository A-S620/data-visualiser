import { store } from '../ReduxStore/store';
import { resetApplicationState } from '../ReduxStore/Actions/ReducerActions';

export class ResetDataHandler {
    public resetData() {
        store.dispatch(resetApplicationState());
    }
}
