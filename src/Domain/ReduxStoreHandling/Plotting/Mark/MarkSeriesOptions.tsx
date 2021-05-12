import { store } from '../../../../ReduxStore/store';
import { addMarkOptions, resetMarkOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesOptions } from '../../../../Interfaces/Visualisations/Mark/IMarkSeriesOptions';

export default class MarkSeriesOptions {
    public create(markOptions: IMarkSeriesOptions) {
        store.dispatch(addMarkOptions(markOptions));
    }
    public get(): IMarkSeriesOptions {
        return store.getState().markSeriesOptions;
    }
    public reset() {
        store.dispatch(resetMarkOptions());
    }
}
