import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addLineOptions, resetLineOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesOptions } from '../../../../Interfaces/Visualisations/Line/ILineSeriesOptions';

export default class LineSeriesOptions {
    public create(options: ILineSeriesOptions) {
        reduxStore.dispatch(addLineOptions(options));
    }
    public get(): ILineSeriesOptions {
        return reduxStore.getState().lineSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetLineOptions());
    }
}
