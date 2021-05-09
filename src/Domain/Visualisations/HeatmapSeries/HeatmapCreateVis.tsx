import { IHeatmapSeriesCreateVis } from '../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';
import GetHeatmapSeriesOptions from '../../ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/GetHeatmapSeriesOptions';
import { DataHandler } from '../../../Util/DataHandler';

export class HeatmapCreateVis {
    private dataHandler = new DataHandler();

    public createVis(): IHeatmapSeriesCreateVis {
        const options = new GetHeatmapSeriesOptions().getHeatmapSeriesOptions();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            colourRange: options.colourRange,
            data: this.createDataAndColorArray(options.xValue, options.yValue),
            height: options.height,
            width: options.width,
            stroke: options.stroke,
            opacity: options.opacity,
            fill: options.fill,
            colour: options.colour,
        };
    }
    private createDefaultOptions(): IHeatmapSeriesCreateVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            data: this.createDataAndColorArray(intervalFields[0], intervalFields[1]),
            height: 800,
            width: 800,
            stroke: 'black',
            opacity: 1,
            fill: 'black',
            colour: 'black',
        };
    }
    private createDataAndColorArray(xValue: string, yValue: string): Array<object> {
        const analysedData = this.dataHandler.getAnalysedData().intervalDataObjects;
        const dataMap = this.dataHandler.createDataMapWithCount(xValue, yValue, analysedData);
        const data: Array<object> = [];
        dataMap.forEach((value, key) => {
            const keyValues = Object.values(JSON.parse(key));
            const countValue = Object.values(value);
            data.push({ x: keyValues[0], y: keyValues[1], color: countValue[0] });
        });
        return data;
    }
}
