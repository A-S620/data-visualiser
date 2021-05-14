import { CurveType, LineStyle } from './ILineSeriesOptions';

export interface ILineSeriesVis {
    data: Array<Object>;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
