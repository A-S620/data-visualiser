import { CurveType } from '../Line/ILineSeriesOptions';

export interface IAreaSeriesOptions {
    xValue: string;
    yValue: string;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    fill: string;
}
