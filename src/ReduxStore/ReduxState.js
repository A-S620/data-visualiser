const ReduxState = {
    importedData: {
        dataFields: [],
        dataObjects: [],
        dataArrays: [],
    },
    analysedData: {
        fields: [],
        intervalFields: [],
        intervalDataObjects: [],
        nominalFields: [],
        nominalDataObjects: [],
        ordinalFields: [],
        ordinalDataObjects: [],
        binaryFields: [],
        binaryDataObjects: [],
    },
    lineSeriesOptions: {},
    currentLineVisualisation: {},
    barSeriesOptions: {},
    currentBarVisualisation: {},
    markSeriesOptions: {},
    currentMarkVisualisation: {},
};
export default ReduxState;
