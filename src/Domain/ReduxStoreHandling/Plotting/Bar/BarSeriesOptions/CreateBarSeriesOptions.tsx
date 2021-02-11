import { store } from '../../../../../ReduxStore/store';
import { addBarOptions } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesOptions } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';

export default class CreateBarSeriesOptions {
    private barOptions: IBarSeriesOptions;

    constructor(barOptions: IBarSeriesOptions) {
        this.barOptions = barOptions;
    }
    public createBarSeriesOptions() {
        store.dispatch(addBarOptions(this.barOptions));
    }
}
