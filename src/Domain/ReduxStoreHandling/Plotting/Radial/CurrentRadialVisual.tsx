import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentRadialVisual, resetCurrentRadialVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IRadialSeriesVis } from '../../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';

export default class CurrentRadialVisual {
    public create(currentVisual: IRadialSeriesVis) {
        reduxStore.dispatch(addCurrentRadialVisual(currentVisual));
    }
    public get(): IRadialSeriesVis {
        return reduxStore.getState().currentRadialVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentRadialVisual());
    }
}
