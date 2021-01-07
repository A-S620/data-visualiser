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
    linePlotOptions: {},
};
export default ReduxState;
