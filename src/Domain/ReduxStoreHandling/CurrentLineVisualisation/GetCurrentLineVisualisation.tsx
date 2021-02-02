import { store } from '../../../ReduxStore/store';
import { ILinePlotCreateVis } from '../../../Interfaces/plotting/ILinePlotCreateVis';
export default class GetCurrentLineVisualisation {
    public getCurrentLineVisual(): ILinePlotCreateVis {
        return store.getState().currentLineVisualisation;
    }
}
