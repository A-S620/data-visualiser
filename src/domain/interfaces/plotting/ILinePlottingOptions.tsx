export interface ILinePlottingOptions {
    xValues: string;
    yValues: string;
    height: number;
    width: number;
    colour: string;
    opacity: number;
    curveType: CurveType | null;
    lineStyle: LineStyle | undefined;
    lineWidth: number;
}
export enum CurveType {
    curveBasis = 'curveBasis',
    curveBasisClosed = 'curveBasisClosed',
    curveBasisOpen = 'curveBasisOpen',
    curveBundle = 'curveBundle',
    curveCardinal = 'curveCardinal',
    curveCardinalClosed = 'curveCardinalClosed',
    curveCardinalOpen = 'curveCardinalOpen',
    curveCatmullRom = 'curveCatmullRom',
    curveCatmullRomClosed = 'curveCatmullRomClosed',
    curveCatmullRomOpen = 'curveCatmullRomOpen',
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
