import { store } from '../../../../../ReduxStore/store';
import { resetBarOptions } from '../../../../../ReduxStore/Actions/ReducerActions';

export default class ResetBarSeriesOptions {
    public resetBarSeriesOptions() {
        store.dispatch(resetBarOptions());
    }
}
