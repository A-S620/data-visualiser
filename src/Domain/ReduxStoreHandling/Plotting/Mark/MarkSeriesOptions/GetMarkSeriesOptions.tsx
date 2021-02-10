import { store } from '../../../../../ReduxStore/store';
import { IMarkSeriesOptions } from '../../../../../Interfaces/plotting/Mark/IMarkSeriesOptions';

export default class GetMarkSeriesOptions {
    public getMarkSeriesOptions(): IMarkSeriesOptions {
        return store.getState().markSeriesOptions;
    }
}
