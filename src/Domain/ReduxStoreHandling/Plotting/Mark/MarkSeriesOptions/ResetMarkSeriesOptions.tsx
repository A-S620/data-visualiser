import { store } from '../../../../../ReduxStore/store';
import { resetMarkOptions } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetMarkSeriesOptions {
    public resetMarkSeriesOptions() {
        store.dispatch(resetMarkOptions());
    }
}
