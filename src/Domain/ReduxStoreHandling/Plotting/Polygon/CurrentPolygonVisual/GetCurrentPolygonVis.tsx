import { store } from '../../../../../ReduxStore/store';
import { IPolygonSeriesVis } from '../../../../../Interfaces/Visualisations/Polygon/IPolygonSeriesVis';
export default class GetCurrentPolygonVis {
    public get(): IPolygonSeriesVis {
        return store.getState().currentPolygonVisual;
    }
}
