//Responsible for resetting the importedData redux state
//Store components
import { store } from '../../../ReduxStore/store';
import { resetImportedData } from '../../../ReduxStore/Actions/ReducerActions';

export default class ResetImportedData {
    public resetImportedDataState() {
        store.dispatch(resetImportedData());
    }
}
