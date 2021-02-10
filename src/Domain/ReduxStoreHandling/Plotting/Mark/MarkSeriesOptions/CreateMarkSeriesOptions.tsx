import { store } from '../../../../../ReduxStore/store';
import { addMarkOptions } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesOptions } from '../../../../../Interfaces/plotting/Mark/IMarkSeriesOptions';

export default class CreateMarkSeriesOptions {
    private markOptions: IMarkSeriesOptions;

    constructor(markOptions: IMarkSeriesOptions) {
        this.markOptions = markOptions;
    }
    public createMarkSeriesOptions() {
        store.dispatch(addMarkOptions(this.markOptions));
    }
}
