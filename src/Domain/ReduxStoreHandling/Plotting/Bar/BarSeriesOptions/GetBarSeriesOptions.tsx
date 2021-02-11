import { store } from '../../../../../ReduxStore/store';
import { IBarSeriesOptions } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';

export default class GetBarSeriesOptions {
    public getBarSeriesOptions(): IBarSeriesOptions {
        return store.getState().barSeriesOptions;
    }
}
