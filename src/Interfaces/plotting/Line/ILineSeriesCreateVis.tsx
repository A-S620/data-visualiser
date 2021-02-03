import { CurveType, ILineSeriesOptions, LineStyle } from './ILineSeriesOptions';

export interface ILineSeriesCreateVis {
    data: Array<Object>;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
