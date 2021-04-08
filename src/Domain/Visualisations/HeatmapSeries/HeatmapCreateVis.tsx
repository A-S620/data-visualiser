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
    private createDataAndColorArray(xValue: string, yValue: string): Array<object> {
        const arrayXY = this.createDataArray(xValue, yValue);
        const uniqueArrayXY: Array<object> = [];
        const arrayXYColour: Array<object> = [];
        for (var item of arrayXY) {
            var countOfItem = this.getCountOfObject(item, arrayXY);
            if (!this.arrayIncludesObject(item, uniqueArrayXY)) {
                arrayXYColour.push({
                    x: Object.values(item)[0],
                    y: Object.values(item)[1],
                    color: countOfItem,
                });
                uniqueArrayXY.push(item);
            }
        }
        return arrayXYColour;
    }
    private arrayIncludesObject(obj: object, array: Array<object>): boolean {
        const [x, y] = Object.values(obj);
        for (var item of array) {
            if (Object.values(item)[0] === x && Object.values(item)[1] === y) {
                return true;
            }
        }
        return false;
    }
    private getCountOfObject(obj: object, array: Array<object>): number {
        var count = 0;
        for (var item of array) {
            if (JSON.stringify(item) === JSON.stringify(obj)) {
                count += 1;
            }
        }
        return count;
    }
}
