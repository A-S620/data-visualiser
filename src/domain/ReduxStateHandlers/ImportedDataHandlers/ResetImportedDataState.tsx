//Responsible for resetting the importedData redux state
//Store components
import Store from '../../../store/Store';

export default class ResetImportedDataState {
    public resetImportedDataState() {
        Store.dispatch({
            type: 'importedDataStateReset',
        });
    }
}
