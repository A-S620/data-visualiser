import { IMarkSeriesCreateVis } from '../../../Interfaces/Visualisations/Mark/IMarkSeriesCreateVis';
import { DataHandler } from '../../../Util/DataHandler';
import MarkSeriesOptions from '../../ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';

export class MarkSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IMarkSeriesCreateVis {
        const options = new MarkSeriesOptions().get();
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
            stroke: options.stroke,
            opacity: options.opacity,
            fill: options.fill,
            colour: options.colour,
        };
    }
    private createDefaultOptions(): IMarkSeriesCreateVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            data: this.dataHandler.createIntegerDataArray(
                intervalFields[0],
                intervalFields[1],
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: 800,
            width: 800,
            stroke: 'black',
            opacity: 1,
            fill: 'black',
            colour: 'black',
        };
    }
}
