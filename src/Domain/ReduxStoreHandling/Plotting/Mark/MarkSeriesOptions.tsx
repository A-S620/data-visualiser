import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addMarkOptions, resetMarkOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesOptions } from '../../../../Interfaces/Visualisations/Mark/IMarkSeriesOptions';

export default class MarkSeriesOptions {
    public create(options: IMarkSeriesOptions) {
        reduxStore.dispatch(addMarkOptions(options));
    }
    public get(): IMarkSeriesOptions {
        return reduxStore.getState().markSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetMarkOptions());
    }
}
