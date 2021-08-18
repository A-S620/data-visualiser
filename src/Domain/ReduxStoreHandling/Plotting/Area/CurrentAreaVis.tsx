import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentAreaVisual, resetCurrentAreaVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IAreaSeriesVis } from '../../../../Interfaces/Visualisations/Area/IAreaSeriesVis';

export default class CurrentAreaVis {
    public create(currentVisual: IAreaSeriesVis) {
        reduxStore.dispatch(addCurrentAreaVisual(currentVisual));
    }
    public get(): IAreaSeriesVis {
        return reduxStore.getState().currentAreaVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentAreaVisual());
    }
}
