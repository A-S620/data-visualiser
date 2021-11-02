import { reduxStore } from '../../../ReduxStore/reduxStore';

export class AnalyseBinaryData {
    private readonly dataObjects = reduxStore.getState().importedData.dataObjects;
    private readonly binaryFields: any;
    private binaryDataObjects: Array<object> = [];
    constructor(binaryFields: Array<string>) {
        this.binaryFields = binaryFields;
    }
    public validateBinaryData(): Array<object> {
        if (this.binaryFields.length > 0) {
            for (const field of this.binaryFields) {
                this.binaryDataObjects.push(this.getFieldObject(field));
            }
        }
        return this.binaryDataObjects;
    }
    private getFieldObject(field: string): object {
        const fieldArray: Array<object> = [];
        const objectToReturn: object = {};
        const allValuesForField = this.getValuesForField(field);
        for (const value of allValuesForField) {
            fieldArray.push(this.createValueObject(field, value, allValuesForField));
        }
        // @ts-ignore
        objectToReturn[field] = fieldArray;
        return objectToReturn;
    }
    private getValuesForField(field: string): Array<string> {
        const valuesForField: Array<string> = [];
        for (const object of this.dataObjects) {
            for (const [key, value] of Object.entries(object)) {
                if (key === field && !valuesForField.includes(value as string) && this.binaryFields.includes(key)) {
                    valuesForField.push(value as string);
                }
            }
        }
        return valuesForField;
    }
    private getValueCount(field: string, binaryValue: string): number {
        let count = 0;
        for (const object of this.dataObjects) {
            for (const [key, value] of Object.entries(object)) {
                if (key === field && value === binaryValue) {
                    count += 1;
                }
            }
        }
        return count;
    }
    private getValuePercent(field: string, binaryValue: string, allValues: Array<string>): number {
        let total = 0;
        for (const value of allValues) {
            total += this.getValueCount(field, value);
        }
        const count = this.getValueCount(field, binaryValue);
        return Math.round((count / total) * 100);
    }
    private createValueObject(field: string, binaryValue: string, allValues: Array<string>): object {
        return {
            name: binaryValue,
            count: this.getValueCount(field, binaryValue),
            percent: this.getValuePercent(field, binaryValue, allValues),
        };
    }
}
