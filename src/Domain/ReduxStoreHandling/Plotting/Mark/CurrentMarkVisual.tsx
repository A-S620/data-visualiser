import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentMarkVisual, resetCurrentMarkVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { IMarkSeriesVis } from '../../../../Interfaces/Visualisations/Mark/IMarkSeriesVis';

export default class CurrentMarkVisual {
    public create(currentVisual: IMarkSeriesVis) {
        reduxStore.dispatch(addCurrentMarkVisual(currentVisual));
    }
    public get(): IMarkSeriesVis {
        return reduxStore.getState().currentMarkVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentMarkVisual());
    }
}
