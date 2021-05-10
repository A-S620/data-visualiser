import { store } from '../../../../../ReduxStore/store';
import { addCurrentMarkVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';

export default class CreateCurrentMarkVisual {
    private currentVisual: IMarkSeriesCreateVis;
    constructor(currentVisual: IMarkSeriesCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentMarkVisual() {
        store.dispatch(addCurrentMarkVisual(this.currentVisual));
    }
}
