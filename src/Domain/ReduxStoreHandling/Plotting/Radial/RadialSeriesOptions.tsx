import { store } from '../../../../ReduxStore/store';
import { addRadialOptions, resetRadialOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IRadialSeriesOptions } from '../../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';

export default class RadialSeriesOptions {
    public create(options: IRadialSeriesOptions) {
        store.dispatch(addRadialOptions(options));
    }
    public get(): IRadialSeriesOptions {
        return store.getState().radialSeriesOptions;
    }
    public reset() {
        store.dispatch(resetRadialOptions());
    }
}
