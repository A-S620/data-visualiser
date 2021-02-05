export interface IBarSeriesOptions {
    xValue: string;
    yValue: yValue;
    height: number;
    width: number;
    colour: string;
    stroke: string;
    opacity: number;
    fill: string;
    barWidth: number;
}
export enum yValue {
    count = 'count',
    percent = 'percent',
}
