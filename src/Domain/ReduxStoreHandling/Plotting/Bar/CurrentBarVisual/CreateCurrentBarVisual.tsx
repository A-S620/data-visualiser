import { store } from '../../../../../ReduxStore/store';
import { addCurrentBarVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesVis } from '../../../../../Interfaces/Visualisations/Bar/IBarSeriesVis';

export default class CreateCurrentBarVisual {
    private currentVisual: IBarSeriesVis;
    constructor(currentVisual: IBarSeriesVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentBarVisual() {
        store.dispatch(addCurrentBarVisual(this.currentVisual));
    }
}
