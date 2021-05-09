import GetLineSeriesOptions from '../../ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import { ILineSeriesCreateVis } from '../../../Interfaces/Visualisations/Line/ILineSeriesCreateVis';
import { DataHandler } from '../../../Util/DataHandler';

export class LineSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): ILineSeriesCreateVis {
        const lineSeriesOptions = new GetLineSeriesOptions().getLineSeriesOptions();
        if (Object.keys(lineSeriesOptions).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: this.dataHandler.createIntegerDataArray(
                lineSeriesOptions.xValue,
                lineSeriesOptions.yValue,
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: lineSeriesOptions.height,
            width: lineSeriesOptions.width,
            stroke: lineSeriesOptions.stroke,
            opacity: lineSeriesOptions.opacity,
            curveType: lineSeriesOptions.curveType,
            lineStyle: lineSeriesOptions.lineStyle,
            lineWidth: lineSeriesOptions.lineWidth,
        };
    }
    private createDefaultOptions(): ILineSeriesCreateVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            data: this.dataHandler.createIntegerDataArray(
                intervalFields[0],
                intervalFields[1],
                this.dataHandler.getAnalysedData().intervalDataObjects
            ),
            height: 800,
            width: 800,
            stroke: '#000000',
            opacity: 1,
            curveType: null,
            lineStyle: undefined,
            lineWidth: 2,
        };
    }
}
