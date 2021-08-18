import { DataHandler } from '../../../Util/DataHandler';
import { IAreaSeriesVis } from '../../../Interfaces/Visualisations/Area/IAreaSeriesVis';
import AreaSeriesOptions from '../../ReduxStoreHandling/Plotting/Area/AreaSeriesOptions';
import { CurveType } from '../../../Interfaces/Visualisations/Line/ILineSeriesOptions';
export class AreaSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IAreaSeriesVis {
        const options = new AreaSeriesOptions().get();
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
            fill: options.fill,
            stroke: options.stroke,
            opacity: options.opacity,
            curveType: options.curveType,
        };
    }
    private createDefaultOptions(): IAreaSeriesVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            data: this.dataHandler.createIntegerDataArray(
                intervalFields[0],
                intervalFields[1],
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: 800,
            width: 800,
            fill: '#000000',
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
        };
    }
}
