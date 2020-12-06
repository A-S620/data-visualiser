//Responsible for resetting the importedData redux state
//Store components
import Store from '../../../store/Store';
//Actions
import * as importedDataActions from '../../../store/Actions/ImportedDataActions';
export default class ResetImportedDataState {
    public resetImportedDataState() {
        Store.dispatch({
            type: importedDataActions.IMPORTED_DATA_STATE_RESET,
        });
    }
}
