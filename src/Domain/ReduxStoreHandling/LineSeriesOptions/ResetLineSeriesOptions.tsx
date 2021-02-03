import { store } from '../../../ReduxStore/store';
import { resetLineOptions } from '../../../ReduxStore/Actions/ReducerActions';

export default class ResetLineSeriesOptions {
    public resetLinePlotOptions() {
        store.dispatch(resetLineOptions());
    }
}
