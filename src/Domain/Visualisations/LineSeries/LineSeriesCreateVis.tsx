import { ILineSeriesVis } from '../../../Interfaces/Visualisations/Line/ILineSeriesVis';
import { DataHandler } from '../../../Util/DataHandler';
import LineSeriesOptions from '../../ReduxStoreHandling/Plotting/Line/LineSeriesOptions';

export class LineSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): ILineSeriesVis {
        const lineSeriesOptions = new LineSeriesOptions().get();
        if (Object.keys(lineSeriesOptions).length === 0) {
            return this.createDefaultOptions();
        }

        const dataMap = this.dataHandler.createDataMapWithCount(
            lineSeriesOptions.xValue,
            lineSeriesOptions.yValue,
            this.dataHandler.getAnalysedData().intervalDataObjects
        );
        return {
            data: this.dataHandler.createArrayFromDataMap(lineSeriesOptions.xValue, lineSeriesOptions.yValue, dataMap),
            height: lineSeriesOptions.height,
            width: lineSeriesOptions.width,
            stroke: lineSeriesOptions.stroke,
            opacity: lineSeriesOptions.opacity,
            curveType: lineSeriesOptions.curveType,
            lineStyle: lineSeriesOptions.lineStyle,
            lineWidth: lineSeriesOptions.lineWidth,
        };
    }
    private createDefaultOptions(): ILineSeriesVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        const dataMap = this.dataHandler.createDataMapWithCount(
            intervalFields[0],
            intervalFields[1],
            this.dataHandler.getAnalysedData().intervalDataObjects
        );
        return {
            data: this.dataHandler.createArrayFromDataMap(intervalFields[0], intervalFields[1], dataMap),
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
