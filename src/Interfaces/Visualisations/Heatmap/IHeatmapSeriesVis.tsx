export interface IHeatmapSeriesVis {
    data: Array<Object>;
    height: number;
    width: number;
    colourRange: { colour1: string; colour2: string };
    colour: string;
    stroke: string;
    opacity: number;
    fill: string;
}
