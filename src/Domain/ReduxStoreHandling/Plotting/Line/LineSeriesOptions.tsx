import { store } from '../../../../ReduxStore/store';
import { addLineOptions, resetLineOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesOptions } from '../../../../Interfaces/Visualisations/Line/ILineSeriesOptions';

export default class LineSeriesOptions {
    public create(options: ILineSeriesOptions) {
        store.dispatch(addLineOptions(options));
    }
    public get(): ILineSeriesOptions {
        return store.getState().lineSeriesOptions;
    }
    public reset() {
        store.dispatch(resetLineOptions());
    }
}
