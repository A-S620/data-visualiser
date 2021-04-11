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
    private createDataAndColorArray2(xValue: string, yValue: string): Array<object> {
        const analysedData = this.getAnalysedData().intervalDataObjects;
        const dataMap = new Map();
        analysedData.forEach((obj) => {
            // @ts-ignore
            const { x, y } = this.createDataObject(xValue, yValue, obj);
            console.log({ x, y });
            if (dataMap.has({ x, y })) {
                console.log('beep');
                dataMap.get({ x, y }).count += 1;
            } else {
                dataMap.set({ x, y }, { count: 1 });
            }
        });
        console.log(dataMap);
        const data: Array<Object> = [];
        dataMap.forEach((value, key) => {
            // @ts-ignore
            const { x, y } = Object.entries(key);
            // @ts-ignore
            const { count } = Object.entries(value);
            data.push({ x: x, y: y, color: count });
        });
        return data;
    }
    private createDataAndColorArray(xValue: string, yValue: string): Array<object> {
        const arrayXY = this.createDataArray(xValue, yValue);
        const dataMap = new Map();
        console.log(this.createDataAndColorArray2(xValue, yValue));
        for (var item of arrayXY) {
            var countOfItem = this.getCountOfObject(item, arrayXY);
            const [itemX, itemY] = Object.values(item);
            if (!dataMap.has(`${itemX},${itemY}`)) {
                dataMap.set(`${itemX},${itemY}`, { x: itemX, y: itemY, color: countOfItem });
            }
        }
        return Array.from(dataMap.values());
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
    private getCountOfObject(obj: object, array: Array<object>): number {
        var count = 0;
        const objAsString = JSON.stringify(obj);
        for (var item of array) {
            const itemAsString = JSON.stringify(item);
            if (itemAsString === objAsString) {
                count += 1;
            }
        }
        return count;
    }
    private getAnalysedData(): IAnalysedFileData {
        const getAnalysedData = new GetAnalysedData();
        return getAnalysedData.getAnalysedData();
    }
}
