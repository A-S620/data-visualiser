import { IMarkSeriesVis } from '../../../Interfaces/Visualisations/Mark/IMarkSeriesVis';
import { DataHandler } from '../../../Util/DataHandler';
import MarkSeriesOptions from '../../ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';
import { IPolygonSeriesVis } from '../../../Interfaces/Visualisations/Polygon/IPolygonSeriesVis';
import PolygonSeriesOptions from '../../ReduxStoreHandling/Plotting/Polygon/PolygonSeriesOptions';

export class PolygonSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IPolygonSeriesVis {
        const options = new PolygonSeriesOptions().get();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: this.dataHandler.createIntegerDataArray(
                options.xValue,
                options.yValue,
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: options.height,
            width: options.width,
            colour: options.colour,
        };
    }
    private createDefaultOptions(): IPolygonSeriesVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            data: this.dataHandler.createIntegerDataArray(
                intervalFields[0],
                intervalFields[1],
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: 800,
            width: 800,
            colour: 'black',
        };
    }
}
