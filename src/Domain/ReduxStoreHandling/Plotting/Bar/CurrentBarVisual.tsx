import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentBarVisual, resetCurrentBarVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IBarSeriesVis } from '../../../../Interfaces/Visualisations/Bar/IBarSeriesVis';

export default class CurrentBarVisual {
    public create(currentVisual: IBarSeriesVis) {
        reduxStore.dispatch(addCurrentBarVisual(currentVisual));
    }
    public get(): IBarSeriesVis {
        return reduxStore.getState().currentBarVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentBarVisual());
    }
}
