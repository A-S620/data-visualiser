import { store } from '../../../ReduxStore/store';
import { ILineSeriesCreateVis } from '../../../Interfaces/plotting/Line/ILineSeriesCreateVis';
export default class GetCurrentLineVisualisation {
    public getCurrentLineVisual(): ILineSeriesCreateVis {
        return store.getState().currentLineVisualisation;
    }
}
