import { CurveType, LineStyle } from '../Line/ILinePlotOptions';

export interface IBarPlotOptions {
    xValue: string;
    yValue: string;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
