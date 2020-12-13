//Responsible for resetting the Analysed data slice in the Redux store.
//Store components
import { store } from '../../../ReduxStore/store';
import { resetAnalysedData } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetAnalysedData {
    public resetAnalysedData() {
        store.dispatch(resetAnalysedData());
    }
}
