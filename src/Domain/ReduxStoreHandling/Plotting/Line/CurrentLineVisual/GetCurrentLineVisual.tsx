import { store } from '../../../../../ReduxStore/store';
import { ILineSeriesCreateVis } from '../../../../../Interfaces/Visualisations/Line/ILineSeriesCreateVis';
export default class GetCurrentLineVisual {
    public getCurrentLineVisual(): ILineSeriesCreateVis {
        return store.getState().currentLineVisualisation;
    }
}
