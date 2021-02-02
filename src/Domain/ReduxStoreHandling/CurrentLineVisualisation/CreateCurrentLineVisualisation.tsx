import { store } from '../../../ReduxStore/store';
import { addCurrentLineVisual } from '../../../ReduxStore/Actions/ReducerActions';
import { ILinePlotCreateVis } from '../../../Interfaces/plotting/Line/ILinePlotCreateVis';

export default class CreateCurrentLineVisualisation {
    private currentVisual: ILinePlotCreateVis;
    constructor(currentVisual: ILinePlotCreateVis) {
        this.currentVisual = currentVisual;
    }
    public createCurrentLineVisual() {
        store.dispatch(addCurrentLineVisual(this.currentVisual));
    }
}
