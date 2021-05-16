import { CurveType } from '../Line/ILineSeriesOptions';

export interface IAreaSeriesVis {
    data: Array<Object>;
    height: number;
    width: number;
    stroke: string;
    opacity: number;
    curveType: CurveType | null;
    fill: string;
}
