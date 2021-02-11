import GetBarSeriesOptions from '../../ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { IBarSeriesCreateVis } from '../../../Interfaces/Visualisations/Bar/IBarSeriesCreateVis';
import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';

export class BarSeriesCreateVis {
    public createVis(): IBarSeriesCreateVis {
        const barSeriesOptions = new GetBarSeriesOptions().getBarSeriesOptions();
        if (Object.keys(barSeriesOptions).length === 0) {
            return this.createDefaultOptions();
        }
        return {
            barWidth: barSeriesOptions.barWidth,
            colour: barSeriesOptions.colour,
            data: this.createDataArray(barSeriesOptions.xValue, barSeriesOptions.yValue),
            fill: barSeriesOptions.fill,
            height: barSeriesOptions.height,
            opacity: barSeriesOptions.opacity,
            stroke: barSeriesOptions.stroke,
            width: barSeriesOptions.width,
        };
    }
    private createDefaultOptions(): IBarSeriesCreateVis {
        return {
            barWidth: 0.5,
            colour: '#000000',
            fill: '#000000',
            height: 800,
            opacity: 1,
            stroke: '#000000',
            width: 800,
            data: [{ x: this.getFirstXValue(), y: this.getFirstYValue() }],
        };
    }
    private getFirstXValue(): any {
        const { nominalDataObjects } = this.getAnalysedData();
        const firstField = nominalDataObjects[0];
        const fieldArray = Object.values(firstField)[0];
        const firstObject = fieldArray[0];
        return Object.values(firstObject)[0];
    }
    private getFirstYValue(): any {
        const { nominalDataObjects } = this.getAnalysedData();
        const firstField = nominalDataObjects[0];
        const fieldArray = Object.values(firstField)[0];
        const firstObject = fieldArray[0];
        return Object.values(firstObject)[2];
    }
    private getAnalysedData(): IAnalysedFileData {
        const getAnalysedData = new GetAnalysedData();
        return getAnalysedData.getAnalysedData();
    }
    private getFieldValues(xValue: string): object {
        const { nominalDataObjects } = this.getAnalysedData();
        const { ordinalDataObjects } = this.getAnalysedData();
        const allObjects = nominalDataObjects.concat(ordinalDataObjects);
        for (var index = 0; index < allObjects.length; index += 1) {
            if (Object.keys(allObjects[index])[0] === xValue) {
                return allObjects[index];
            }
        }
        return {};
    }
    private createDataArray(xValue: string, yValue: string): Array<object> {
        const fieldValues = this.getFieldValues(xValue);
        const arrayOfValues = Object.values(fieldValues)[0];
        const data: Array<Object> = [];
        for (var index = 0; index < arrayOfValues.length; index += 1) {
            const valueObject = arrayOfValues[index];
            const dataObject = this.createDataObject(valueObject, yValue);
            data.push(dataObject);
        }
        return data;
    }
    private createDataObject(valueObject: object, yValue: string): object {
        let x: string = '';
        let y: number = 0;
        for (const [key, value] of Object.entries(valueObject)) {
            if (key === 'name') {
                x = value;
            } else if (key === yValue) {
                y = value;
                return { x, y };
            }
        }
        return {};
    }
}
