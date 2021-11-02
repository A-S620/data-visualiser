import { reduxStore } from '../../../ReduxStore/reduxStore';

export class AnalyseOrdinalData {
    private readonly dataObjects = reduxStore.getState().importedData.dataObjects;
    private readonly ordinalFields: any;
    private ordinalDataObjects: Array<object> = [];
    constructor(ordinalFields: Array<string>) {
        this.ordinalFields = ordinalFields;
    }
    public validateOrdinalData(): Array<object> {
        if (this.ordinalFields.length > 0) {
            for (const field of this.ordinalFields) {
                this.ordinalDataObjects.push(this.getFieldObject(field));
            }
        }
        return this.ordinalDataObjects;
    }
    private getFieldObject(field: string): object {
        const fieldArray: Array<object> = [];
        const objectToReturn: object = {};
        const allOrdinalValuesForField = this.getOrdinalValuesForField(field);
        for (const value of allOrdinalValuesForField) {
            fieldArray.push(this.createOrdinalValueObject(field, value, allOrdinalValuesForField));
        }
        // @ts-ignore
        objectToReturn[field] = fieldArray;
        return objectToReturn;
    }
    private getOrdinalValuesForField(field: string): Array<string> {
        const ordinalValuesForField: Array<string> = [];
        for (const object of this.dataObjects) {
            for (const [key, value] of Object.entries(object)) {
                if (key === field && !ordinalValuesForField.includes(value as string)) {
                    ordinalValuesForField.push(value as string);
                }
            }
        }
        return ordinalValuesForField;
    }
    private getOrdinalValueCount(field: string, ordinalValue: string): number {
        let count = 0;
        for (const object of this.dataObjects) {
            for (const [key, value] of Object.entries(object)) {
                if (key === field && value === ordinalValue) {
                    count += 1;
                }
            }
        }
        return count;
    }
    private getOrdinalValuePercent(field: string, ordinalValue: string, allValues: Array<string>): number {
        let total = 0;
        for (const value of allValues) {
            total += this.getOrdinalValueCount(field, value);
        }
        const count = this.getOrdinalValueCount(field, ordinalValue);
        return Math.round((count / total) * 100);
    }
    private createOrdinalValueObject(field: string, ordinalValue: string, allValues: Array<string>): object {
        return {
            name: ordinalValue,
            count: this.getOrdinalValueCount(field, ordinalValue),
            percent: this.getOrdinalValuePercent(field, ordinalValue, allValues),
        };
    }
}
