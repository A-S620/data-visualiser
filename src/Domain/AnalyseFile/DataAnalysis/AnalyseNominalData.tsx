import { reduxStore } from '../../../ReduxStore/reduxStore';

export class AnalyseNominalData {
    private readonly dataObjects = reduxStore.getState().importedData.dataObjects;
    private readonly nominalFields: any;
    private nominalDataObjects: Array<object> = [];
    constructor(nominalFields: Array<string>) {
        this.nominalFields = nominalFields;
    }
    public validateNominalData(): Array<object> {
        if (this.nominalFields.length > 0) {
            for (const field of this.nominalFields) {
                this.nominalDataObjects.push(this.getFieldObject(field));
            }
        }
        return this.nominalDataObjects;
    }
    private getFieldObject(field: string): object {
        const fieldArray: Array<object> = [];
        const objectToReturn: object = {};
        const nominalValues = this.getAllNominalValues(field);
        for (const value of nominalValues) {
            fieldArray.push(this.createNominalObject(field, value, nominalValues));
        }
        // @ts-ignore
        objectToReturn[field] = fieldArray;
        return objectToReturn;
    }
    private getAllNominalValues(field: string): Array<string> {
        const nominalValues: Array<string> = [];
        for (const dataObject of this.dataObjects) {
            for (const nominalField of this.nominalFields) {
                if (field === nominalField) {
                    const nominalValueToAdd = AnalyseNominalData.getNominalValue(dataObject, field);
                    if (nominalValueToAdd !== '') {
                        if (!nominalValues.includes(nominalValueToAdd)) {
                            nominalValues.push(nominalValueToAdd);
                        }
                    }
                }
            }
        }

        return nominalValues;
    }
    private static getNominalValue(object: object, field: string): string {
        for (const [key, value] of Object.entries(object)) {
            if (key === field) {
                return value;
            }
        }
        return '';
    }
    private getNominalValueCount(field: string, nominalValue: string): number {
        let count = 0;
        for (const object of this.dataObjects) {
            for (const [key, value] of Object.entries(object)) {
                if (key === field && value === nominalValue) {
                    count += 1;
                }
            }
        }
        return count;
    }
    private getNominalValuePercent(field: string, nominalValue: string, allValues: Array<string>): number {
        let total = 0;
        for (const value of allValues) {
            total += this.getNominalValueCount(field, value);
        }
        const count = this.getNominalValueCount(field, nominalValue);
        return Math.round((count / total) * 100);
    }
    private createNominalObject(field: string, nominalValue: string, allValues: Array<string>): object {
        return {
            name: nominalValue,
            count: this.getNominalValueCount(field, nominalValue),
            percent: this.getNominalValuePercent(field, nominalValue, allValues),
        };
    }
}
