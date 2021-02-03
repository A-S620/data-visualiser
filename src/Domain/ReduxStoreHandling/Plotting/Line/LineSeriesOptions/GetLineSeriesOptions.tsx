import { store } from '../../../../../ReduxStore/store';
import { ILineSeriesOptions } from '../../../../../Interfaces/plotting/Line/ILineSeriesOptions';

export default class GetLineSeriesOptions {
    public getLineSeriesOptions(): ILineSeriesOptions {
        return store.getState().lineSeriesOptions;
    }
}
