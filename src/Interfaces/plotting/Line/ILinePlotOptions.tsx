export interface ILinePlotOptions {
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
export enum CurveType {
    curveLinear = 'curveLinear',
    curveLinearClosed = 'curveLinearClosed',
    curveMonotoneX = 'curveMonotoneX',
    curveMonotoneY = 'curveMonotoneY',
    curveNatural = 'curveNatural',
    curveStep = 'curveStep',
    curveStepAfter = 'curveStepAfter',
    curveStepBefore = 'curveStepBefore',
}
export enum LineStyle {
    DASHED = 'dashed',
    SOLID = 'solid',
}
