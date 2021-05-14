import { store } from '../../../../ReduxStore/store';
import { addBarOptions, resetBarOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesOptions } from '../../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';

export default class BarSeriesOptions {
    public create(options: IBarSeriesOptions) {
        store.dispatch(addBarOptions(options));
    }
    public get(): IBarSeriesOptions {
        return store.getState().barSeriesOptions;
    }
    public reset() {
        store.dispatch(resetBarOptions());
    }
}
