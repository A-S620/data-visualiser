import { FieldTypes } from './IAnalysedFileData';

export interface IFields {
    fields: Array<{ field: string; fieldType: FieldTypes }>;
}
