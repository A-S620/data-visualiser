import { reduxStore } from '../ReduxStore/reduxStore';
import { resetApplicationState } from '../ReduxStore/Actions/ReducerActions';

export class ResetDataHandler {
    public resetData() {
        reduxStore.dispatch(resetApplicationState());
    }
}
