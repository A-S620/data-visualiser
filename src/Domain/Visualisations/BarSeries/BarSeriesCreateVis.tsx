import GetBarSeriesOptions from '../../ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import { IBarSeriesCreateVis } from '../../../Interfaces/Visualisations/Bar/IBarSeriesCreateVis';
import { DataHandler } from '../../../Util/DataHandler';

export class BarSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IBarSeriesCreateVis {
        const barSeriesOptions = new GetBarSeriesOptions().getBarSeriesOptions();
        if (Object.keys(barSeriesOptions).length === 0) {
            return this.createDefaultOptions();
        }
        return {
            barWidth: barSeriesOptions.barWidth,
            colour: barSeriesOptions.colour,
            data: this.dataHandler.createNonIntegerDataArray(barSeriesOptions.xValue, barSeriesOptions.yValue),
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
        const { nominalDataObjects } = this.dataHandler.getAnalysedData();
        const firstField = nominalDataObjects[0];
        const fieldArray = Object.values(firstField)[0];
        const firstObject = fieldArray[0];
        return Object.values(firstObject)[0];
    }
    private getFirstYValue(): any {
        const { nominalDataObjects } = this.dataHandler.getAnalysedData();
        const firstField = nominalDataObjects[0];
        const fieldArray = Object.values(firstField)[0];
        const firstObject = fieldArray[0];
        return Object.values(firstObject)[2];
    }
}
