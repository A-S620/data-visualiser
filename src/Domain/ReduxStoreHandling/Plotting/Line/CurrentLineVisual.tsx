import { reduxStore } from '../../../../ReduxStore/reduxStore';
import { addCurrentLineVisual, resetCurrentLineVisual } from '../../../../ReduxStore/Actions/ReducerActions';
import { ILineSeriesVis } from '../../../../Interfaces/Visualisations/Line/ILineSeriesVis';

export default class CurrentLineVisual {
    public create(currentVisual: ILineSeriesVis) {
        reduxStore.dispatch(addCurrentLineVisual(currentVisual));
    }
    public get(): ILineSeriesVis {
        return reduxStore.getState().currentLineVisual;
    }
    public reset() {
        reduxStore.dispatch(resetCurrentLineVisual());
    }
}
