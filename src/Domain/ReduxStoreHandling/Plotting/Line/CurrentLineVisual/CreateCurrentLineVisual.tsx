import { store } from '../../../../../ReduxStore/store';
import { addCurrentLineVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Line/ILineSeriesCreateVis';

export default class CreateCurrentLineVisual {
    private currentVisual: ILineSeriesCreateVis;
    constructor(currentVisual: ILineSeriesCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentLineVisual() {
        store.dispatch(addCurrentLineVisual(this.currentVisual));
    }
}
