import { store } from '../../../ReduxStore/store';
import { resetLineOptions } from '../../../ReduxStore/Actions/ReducerActions';

export default class ResetLinePlotOptions {
    public resetLinePlotOptions() {
        store.dispatch(resetLineOptions());
    }
}
