import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addBarOptions, resetBarOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesOptions } from '../../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';

export default class BarSeriesOptions {
    public create(options: IBarSeriesOptions) {
        reduxStore.dispatch(addBarOptions(options));
    }
    public get(): IBarSeriesOptions {
        return reduxStore.getState().barSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetBarOptions());
    }
}
