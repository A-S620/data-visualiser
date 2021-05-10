import { store } from '../../../../../ReduxStore/store';
import { addCurrentPolygonVisual } from '../../../../../ReduxStore/Actions/ReducerActions';
import { IPolygonSeriesVis } from '../../../../../Interfaces/Visualisations/Polygon/IPolygonSeriesVis';

export default class CreateCurrentPolygonVis {
    private readonly currentVisual: IPolygonSeriesVis;
    constructor(currentVisual: IPolygonSeriesVis) {
        this.currentVisual = currentVisual;
    }
    public create() {
        store.dispatch(addCurrentPolygonVisual(this.currentVisual));
    }
}
