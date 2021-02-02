import { store } from '../../../ReduxStore/store';
import { addLineOptions } from '../../../ReduxStore/Actions/ReducerActions';
import { ILinePlotOptions } from '../../../Interfaces/plotting/Line/ILinePlotOptions';

export default class CreateLinePlotOptions {
    private lineOptions: ILinePlotOptions;

    constructor(lineOptions: ILinePlotOptions) {
        this.lineOptions = lineOptions;
    }
    public createLinePlotOptions() {
        store.dispatch(addLineOptions(this.lineOptions));
    }
}
