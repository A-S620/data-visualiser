import GetLinePlotOptions from '../ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import GetAnalysedData from '../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { ILinePlotCreateVis } from '../../Interfaces/plotting/Line/ILinePlotCreateVis';
import { IAnalysedFileData } from '../../Interfaces/Analyse/IAnalysedFileData';
import { CurveType } from '../../Interfaces/plotting/Line/ILinePlotOptions';

export class LineSeriesCreateVis {
    public createVis(): ILinePlotCreateVis {
        const linePlotOptions = new GetLinePlotOptions().getLinePlotOptions();
        if (Object.keys(linePlotOptions).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: this.createDataArray(linePlotOptions.xValue, linePlotOptions.yValue),
            height: linePlotOptions.height,
            width: linePlotOptions.width,
            colour: linePlotOptions.colour,
            opacity: linePlotOptions.opacity,
            curveType: linePlotOptions.curveType,
            lineStyle: linePlotOptions.lineStyle,
            lineWidth: linePlotOptions.lineWidth,
        };
    }
    private createDefaultOptions(): ILinePlotCreateVis {
        const { intervalFields } = this.getAnalysedData();
        return {
            data: this.createDataArray(intervalFields[0], intervalFields[1]),
            height: 800,
            width: 800,
            colour: '#000000',
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

    private createDataArray(xValue: string, yValue: string): Array<Object> {
        const { intervalDataObjects: dataObjectsArray } = this.getAnalysedData();
        const data: Array<Object> = [];
        for (let objIndex = 0; objIndex < dataObjectsArray.length; objIndex += 1) {
            const dataObject = this.createDataObject(xValue, yValue, dataObjectsArray[objIndex]);
            data.push(dataObject);
        }
        return data;
    }
}
