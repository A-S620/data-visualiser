import { store } from '../../../../ReduxStore/store';
import { addCurrentPolygonVisual, resetCurrentPolygonVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IPolygonSeriesVis } from '../../../../Interfaces/Visualisations/Polygon/IPolygonSeriesVis';

export default class CurrentPolygonVis {
    public create(currentVisual: IPolygonSeriesVis) {
        store.dispatch(addCurrentPolygonVisual(currentVisual));
    }
    public get(): IPolygonSeriesVis {
        return store.getState().currentPolygonVisual;
    }
    public reset() {
        store.dispatch(resetCurrentPolygonVisual());
    }
}
