import { store } from '../../../ReduxStore/store';
import { resetAnalysedData } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetAnalysedData {
    public resetAnalysedData() {
        store.dispatch(resetAnalysedData());
    }
}
