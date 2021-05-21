import { store } from '../../../../ReduxStore/store';
import { addCurrentRadialVisual, resetCurrentRadialVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IRadialSeriesVis } from '../../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';

export default class CurrentRadialVisual {
    public create(currentVisual: IRadialSeriesVis) {
        store.dispatch(addCurrentRadialVisual(currentVisual));
    }
    public get(): IRadialSeriesVis {
        return store.getState().currentRadialVisual;
    }
    public reset() {
        store.dispatch(resetCurrentRadialVisual());
    }
}
