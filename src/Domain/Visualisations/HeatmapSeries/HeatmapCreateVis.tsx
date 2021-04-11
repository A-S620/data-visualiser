import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { IHeatmapSeriesCreateVis } from '../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesCreateVis';
import GetHeatmapSeriesOptions from '../../ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/GetHeatmapSeriesOptions';

export class HeatmapCreateVis {
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
        const { intervalFields } = this.getAnalysedData();
        return {
            colourRange: ['black', 'red'],
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
        const dataMap = this.createDataMap(xValue, yValue);
        const data: Array<Object> = [];
        dataMap.forEach((value, key) => {
            const keyValues = Object.values(JSON.parse(key));
            const countValue = Object.values(value);
            data.push({ x: keyValues[0], y: keyValues[1], color: countValue[0] });
        });
        return data;
    }
    private createDataMap(xValue: string, yValue: string) {
        const analysedData = this.getAnalysedData().intervalDataObjects;
        const dataMap = new Map();
        analysedData.forEach((obj) => {
            const convertedObj = JSON.stringify(this.createDataObject(xValue, yValue, obj));
            if (dataMap.has(convertedObj)) {
                dataMap.get(convertedObj).count += 1;
            } else {
                dataMap.set(convertedObj, { count: 1 });
            }
        });
        return dataMap;
    }

    private createDataObject(xValue: string, yValue: string, currentObject: Object): Object {
        let x: number = 0;
        let y: number = 0;
        for (const [key, value] of Object.entries(currentObject)) {
            if (key === xValue) {
                x = value;
            } else if (key === yValue) {
                y = value;
                return { x, y };
            }
        }
        return {};
    }

    private getAnalysedData(): IAnalysedFileData {
        const getAnalysedData = new GetAnalysedData();
        return getAnalysedData.getAnalysedData();
    }
}
