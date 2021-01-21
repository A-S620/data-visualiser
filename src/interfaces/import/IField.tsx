import { FieldTypes } from './IAnalysedFileData';

export interface IField {
    field: { field: string; fieldType: FieldTypes };
}
