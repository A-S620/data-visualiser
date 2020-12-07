//Responsible for resetting the importedData redux state
//Store components
import Store from '../../../ReduxStore/Store';
import { resetImportedData } from '../../../ReduxStore/Actions/ImportedDataActions';

export default class ResetImportedData {
    public resetImportedDataState() {
        Store.dispatch(resetImportedData());
    }
}
