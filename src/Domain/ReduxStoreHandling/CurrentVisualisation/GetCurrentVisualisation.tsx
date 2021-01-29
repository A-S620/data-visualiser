import { store } from '../../../ReduxStore/store';
import { ILinePlotCreateVis } from '../../../Interfaces/plotting/ILinePlotCreateVis';
export default class GetCurrentVisualisation {
    public getCurrentVisualisation(): ILinePlotCreateVis {
        return store.getState().currentVisualisation;
    }
}
