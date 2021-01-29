import { store } from '../../../ReduxStore/store';
import { resetImportedData } from '../../../ReduxStore/Actions/ReducerActions';

export default class ResetImportedData {
    public resetImportedDataState() {
        store.dispatch(resetImportedData());
    }
}
