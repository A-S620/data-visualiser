import { CurveType, LineStyle } from '../Line/ILinePlotOptions';

export interface IBarPlotCreateVis {
    data: Array<Object>;
    height: number;
    width: number;
    colour: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
