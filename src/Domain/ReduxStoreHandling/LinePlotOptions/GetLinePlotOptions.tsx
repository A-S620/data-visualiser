import { store } from '../../../ReduxStore/store';
import { ILinePlotOptions } from '../../../Interfaces/plotting/Line/ILinePlotOptions';

export default class GetLinePlotOptions {
    public getLinePlotOptions(): ILinePlotOptions {
        return store.getState().linePlotOptions;
    }
}
