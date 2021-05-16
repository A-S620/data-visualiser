import { store } from '../../../../ReduxStore/store';
import { addPolygonOptions, resetPolygonOptions } from '../../../../ReduxStore/Actions/ReducerActions';
import { IPolygonSeriesOptions } from '../../../../Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';

export default class PolygonSeriesOptions {
    public create(options: IPolygonSeriesOptions) {
        store.dispatch(addPolygonOptions(options));
    }
    public get(): IPolygonSeriesOptions {
        return store.getState().polygonSeriesOptions;
    }
    public reset() {
        store.dispatch(resetPolygonOptions());
    }
}
