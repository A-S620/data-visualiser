import { reduxStore } from '../../../ReduxStore/reduxStore';
import { resetAnalysedData } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetAnalysedData {
    public resetAnalysedData() {
        reduxStore.dispatch(resetAnalysedData());
    }
}
