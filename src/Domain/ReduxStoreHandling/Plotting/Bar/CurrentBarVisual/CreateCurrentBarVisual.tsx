import { store } from '../../../../../ReduxStore/store';
import { addCurrentBarVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesCreateVis';

export default class CreateCurrentBarVisual {
    private currentVisual: IBarSeriesCreateVis;
    constructor(currentVisual: IBarSeriesCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentBarVisual() {
        store.dispatch(addCurrentBarVisual(this.currentVisual));
    }
}
