import GetLinePlotOptions from '../ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import GetAnalysedData from '../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { ILinePlotCreateVis } from '../../interfaces/plotting/ILinePlotCreateVis';
import { CurveType, LineStyle } from '../../interfaces/plotting/ILinePlotOptions';

export class LineSeriesCreateVis {
    public createVis(): ILinePlotCreateVis {
        const getLinePlotOptions = new GetLinePlotOptions().getLinePlotOptions();
        return {
            data: [{ x: 1, y: 0 }],
            height: 0,
            width: 0,
            colour: '#000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
    }
    private createDefaultOptions(): {
        height: number;
        width: number;
        colour: string;
        opacity: number;
        curveType: null;
        lineStyle: undefined;
        lineWidth: number;
    } {
        return {
            height: 400,
            width: 400,
            colour: '#000000',
            opacity: 1,
            curveType: null,
            lineStyle: undefined,
            lineWidth: 2,
        };
    }
}
