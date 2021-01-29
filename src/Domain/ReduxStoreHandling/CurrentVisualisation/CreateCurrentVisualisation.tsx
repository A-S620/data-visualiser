import { store } from '../../../ReduxStore/store';
import { addCurrentVisual } from '../../../ReduxStore/Actions/ReducerActions';
import { ILinePlotCreateVis } from '../../../Interfaces/plotting/ILinePlotCreateVis';

export default class CreateCurrentVisualisation {
    private currentVisual: ILinePlotCreateVis;
    constructor(currentVisual: ILinePlotCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentVisual() {
        store.dispatch(addCurrentVisual(this.currentVisual));
    }
}
