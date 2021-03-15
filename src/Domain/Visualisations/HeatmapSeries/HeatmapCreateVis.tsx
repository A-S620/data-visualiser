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
            data: this.createDataArray(options.xValue, options.yValue),
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
            data: this.createDataArray(intervalFields[0], intervalFields[1]),
            height: 800,
            width: 800,
            stroke: 'black',
            opacity: 1,
            fill: 'black',
            colour: 'black',
        };
    }

    private getAnalysedData(): IAnalysedFileData {
        const getAnalysedData = new GetAnalysedData();
        return getAnalysedData.getAnalysedData();
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

    private createDataArray(xValue: string, yValue: string): Array<object> {
        const { intervalDataObjects: dataObjectsArray } = this.getAnalysedData();
        const data: Array<Object> = [];
        for (let objIndex = 0; objIndex < dataObjectsArray.length; objIndex += 1) {
            const dataObject = this.createDataObject(xValue, yValue, dataObjectsArray[objIndex]);
            data.push(dataObject);
        }
        return data;
    }
}
