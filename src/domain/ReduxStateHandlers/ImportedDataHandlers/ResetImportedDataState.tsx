//Responsible for resetting the importedData redux state
//Store components
import { store } from '../../../store/store';

export default class ResetImportedDataState {
    public resetImportedDataState() {
        store.dispatch({
            type: 'importedDataStateReset',
        });
    }
}
