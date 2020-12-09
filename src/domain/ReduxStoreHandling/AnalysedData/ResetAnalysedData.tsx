//Responsible for resetting the Analysed data slice in the Redux store.
//Store components
import Store from '../../../ReduxStore/Store';
import { resetAnalysedData } from '../../../ReduxStore/Actions/ReducerActions';
export default class ResetAnalysedData {
    public resetAnalysedData() {
        Store.dispatch(resetAnalysedData());
    }
}
