import GetLineSeriesOptions from '../../ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { ILineSeriesCreateVis } from '../../../Interfaces/Visualisations/Line/ILineSeriesCreateVis';
import { IAnalysedFileData } from '../../../Interfaces/Analyse/IAnalysedFileData';

export class LineSeriesCreateVis {
    public createVis(): ILineSeriesCreateVis {
        const lineSeriesOptions = new GetLineSeriesOptions().getLineSeriesOptions();
        if (Object.keys(lineSeriesOptions).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: this.createDataArray(lineSeriesOptions.xValue, lineSeriesOptions.yValue),
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
        const { intervalFields } = this.getAnalysedData();
        return {
            data: this.createDataArray(intervalFields[0], intervalFields[1]),
            height: 800,
            width: 800,
            stroke: '#000000',
            opacity: 1,
            curveType: null,
            lineStyle: undefined,
            lineWidth: 2,
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
