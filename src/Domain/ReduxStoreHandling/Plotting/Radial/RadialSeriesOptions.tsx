import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addRadialOptions, resetRadialOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IRadialSeriesOptions } from '../../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';

export default class RadialSeriesOptions {
    public create(options: IRadialSeriesOptions) {
        reduxStore.dispatch(addRadialOptions(options));
    }
    public get(): IRadialSeriesOptions {
        return reduxStore.getState().radialSeriesOptions;
    }
    public reset() {
        reduxStore.dispatch(resetRadialOptions());
    }
}
