export interface IAnalysedFileData {
    intervalFields: Array<string>;
    integerDataAsObjects: Array<object>;
}
export enum FieldTypes {
    INTERVAL = 'interval',
    NOMINAL = 'nominal',
    ORDINAL = 'ordinal',
    BINARY = 'binary',
    UNARY = 'unary',
    TIME = 'time',
    DATE = 'date',
}
