import { store } from '../../../../../ReduxStore/store';
import { addLineOptions } from '../../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesOptions } from '../../../../../Interfaces/Visualisations/Line/ILineSeriesOptions';

export default class CreateLineSeriesOptions {
    private lineOptions: ILineSeriesOptions;

    constructor(lineOptions: ILineSeriesOptions) {
        this.lineOptions = lineOptions;
    }
    public createLineSeriesOptions() {
        store.dispatch(addLineOptions(this.lineOptions));
    }
}
