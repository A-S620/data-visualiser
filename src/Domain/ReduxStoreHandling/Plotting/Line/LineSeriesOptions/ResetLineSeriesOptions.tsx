import { store } from '../../../../../ReduxStore/store';
import { resetLineOptions } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetLineSeriesOptions {
    public resetLineSeriesOptions() {
        store.dispatch(resetLineOptions());
    }
}
