export interface IAnalysedFileData {
    fields: Array<object>;
    intervalFields: Array<string>;
    intervalDataObjects: Array<object>;
    nominalFields: Array<string>;
    nominalDataObjects: Array<object>;
    ordinalFields: Array<string>;
    ordinalDataObjects: Array<object>;
    binaryFields: Array<string>;
    binaryDataObjects: Array<object>;
    ignoreFields: Array<string>;
    ignoreDataObjects: Array<object>;
}
export enum FieldTypes {
    INTERVAL = 'interval',
    NOMINAL = 'nominal',
    ORDINAL = 'ordinal',
    BINARY = 'binary',
    UNARY = 'unary',
    TIME = 'time',
    DATE = 'date',
    IGNORE = 'ignore',
}
