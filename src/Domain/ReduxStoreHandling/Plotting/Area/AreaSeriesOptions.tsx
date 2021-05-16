import { store } from '../../../../ReduxStore/store';
import { addAreaOptions, resetAreaOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IAreaSeriesOptions } from '../../../../Interfaces/Visualisations/Area/IAreaSeriesOptions';

export default class AreaSeriesOptions {
    public create(options: IAreaSeriesOptions) {
        store.dispatch(addAreaOptions(options));
    }
    public get(): IAreaSeriesOptions {
        return store.getState().areaSeriesOptions;
    }
    public reset() {
        store.dispatch(resetAreaOptions());
    }
}
