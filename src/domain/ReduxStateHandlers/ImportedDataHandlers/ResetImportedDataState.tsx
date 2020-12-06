//Responsible for resetting the importedData redux state
//Store components
import Store from '../../../store/Store';
import { resetImportedData } from '../../../store/Actions/ImportedDataActions';

export default class ResetImportedDataState {
    public resetImportedDataState() {
        Store.dispatch(resetImportedData());
    }
}
