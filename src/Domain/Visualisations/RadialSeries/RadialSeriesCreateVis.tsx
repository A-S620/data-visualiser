import { DataHandler } from '../../../Util/DataHandler';
import { IRadialSeriesVis } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';
import RadialSeriesOptions from '../../ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';

export class RadialSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IRadialSeriesVis {
        const options = new RadialSeriesOptions().get();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: this.getDataObjectsForField(options.column),
            height: options.height,
            width: options.width,
        };
    }
    private getDataObjectsForField(field: string): Array<object> {
        const binaryDataObjects = new GetAnalysedData().get().binaryDataObjects;
        return this.dataHandler.createAngleObjectFromColumnPercent(field, binaryDataObjects);
    }
    public createDefaultOptions(): IRadialSeriesVis {
        return {
            data: [],
            height: 0,
            width: 0,
        };
    }
}
