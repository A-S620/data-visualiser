import { store } from '../../../ReduxStore/store';

export class AnalyseNominalData {
    private readonly dataObjects = store.getState().importedData.dataObjects;
    private nominalFields: any;
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
            fieldArray.push(this.createNominalObject(value, nominalValues));
        }
        // @ts-ignore
        objectToReturn[field] = fieldArray;
        return objectToReturn;
    }
    private getAllNominalValues(field: string): Array<string> {
        const nominalValues: Array<string> = [];
        for (var objectIndex = 0; objectIndex < this.dataObjects.length; objectIndex += 1) {
            const object = this.dataObjects[objectIndex];
            for (var fieldIndex = 0; fieldIndex < this.nominalFields.length; fieldIndex += 1) {
                if (field === this.nominalFields[fieldIndex]) {
                    const nominalValueToAdd = this.getNominalValue(object, field);
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
    private getNominalValue(object: object, field: string): string {
        for (const [key, value] of Object.entries(object)) {
            if (key === field) {
                return value;
            }
        }
        return '';
    }
    private getNominalValueCount(nominalValue: string): number {
        let count = 0;
        for (var objectIndex = 0; objectIndex < this.dataObjects.length; objectIndex += 1) {
            const object = this.dataObjects[objectIndex];
            for (const value of Object.values(object)) {
                if (value === nominalValue) {
                    count += 1;
                }
            }
        }
        return count;
    }
    private getNominalValuePercent(nominalValue: string, allValues: Array<string>): number {
        let total = 0;
        for (const value of allValues) {
            total += this.getNominalValueCount(value);
        }
        const count = this.getNominalValueCount(nominalValue);
        return Math.round((count / total) * 100);
    }
    private createNominalObject(nominalValue: string, allValues: Array<string>): object {
        return {
            name: nominalValue,
            count: this.getNominalValueCount(nominalValue),
            percent: this.getNominalValuePercent(nominalValue, allValues),
        };
    }
}
