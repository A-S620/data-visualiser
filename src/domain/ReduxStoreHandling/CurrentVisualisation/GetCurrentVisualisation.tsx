import { store } from '../../../ReduxStore/store';
import { ILinePlotCreateVis } from '../../../interfaces/plotting/ILinePlotCreateVis';
export default class GetCurrentVisualisation {
    public getCurrentVisualisation(): ILinePlotCreateVis {
        return store.getState().currentVisualisation;
    }
}
