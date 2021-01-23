export interface IAnalysedFileData {
    fields: Array<object>;
    intervalFields: Array<string>;
    intervalDataAsObjects: Array<object>;
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
