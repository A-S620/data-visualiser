import { store } from '../../../../../ReduxStore/store';
import { addCurrentLineVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesCreateVis } from '../../../../../Interfaces/plotting/Line/ILineSeriesCreateVis';

export default class CreateCurrentLineVisualisation {
    private currentVisual: ILineSeriesCreateVis;
    constructor(currentVisual: ILineSeriesCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentLineVisual() {
        store.dispatch(addCurrentLineVisual(this.currentVisual));
    }
}
