import { CurveType, LineStyle } from '../interfaces/plotting/ILinePlottingOptions';

const ReduxState = {
    importedData: {
        dataFields: [],
        dataAsObjects: [],
        dataAsArrays: [],
    },
    analysedData: {
        integerFields: [],
        integerDataObjects: [],
    },
    plottingOptions: {
        linePlotOptions: {
            xValue: '',
            yValue: '',
            height: 500,
            width: 500,
            colour: '#000000',
            opacity: 1,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        },
    },
};
export default ReduxState;
