import { store } from '../../../ReduxStore/store';
import { ILinePlotOptions } from '../../../interfaces/plotting/ILinePlotOptions';

export default class GetLinePlotOptions {
    public getLinePlotOptions(): ILinePlotOptions {
        return store.getState().linePlotOptions;
    }
}
