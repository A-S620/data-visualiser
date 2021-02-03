import { CurveType, ILinePlotOptions, LineStyle } from './ILinePlotOptions';

export interface ILinePlotCreateVis {
    data: Array<Object>;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
