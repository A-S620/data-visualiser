//Responsible for resetting the importedData redux state
//Store components
import { store } from '../../../store/store';

export default class ResetImportedDataState {
    public resetDataFields() {}
    public resetDataAsArrays() {}
    public resetDataAsObjects() {}
    public resetImportedDataState() {
        store.dispatch({
            type: 'RESET_IMPORTED_DATA_STATE',
        });
    }
}
