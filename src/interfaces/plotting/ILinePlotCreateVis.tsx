import { CurveType, ILinePlotOptions, LineStyle } from './ILinePlotOptions';

export interface ILinePlotCreateVis {
    data: Array<{ x: number; y: number }>;
    height: number;
    width: number;
    colour: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
