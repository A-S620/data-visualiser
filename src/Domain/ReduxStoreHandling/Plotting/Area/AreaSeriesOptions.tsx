import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addAreaOptions, resetAreaOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IAreaSeriesOptions } from '../../../../Interfaces/Visualisations/Area/IAreaSeriesOptions';

export default class AreaSeriesOptions {
    public create(options: IAreaSeriesOptions) {
        reduxStore.dispatch(addAreaOptions(options));
    }
    public get(): IAreaSeriesOptions {
        return reduxStore.getState().areaSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetAreaOptions());
    }
}
