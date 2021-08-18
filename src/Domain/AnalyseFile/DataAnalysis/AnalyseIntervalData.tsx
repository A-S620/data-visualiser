import { reduxStore } from '../../../ReduxStore/reduxStore';

export class AnalyseIntervalData {
    private readonly dataObjects = reduxStore.getState().importedData.dataObjects;
    private intervalFields: any;
    private intervalDataObjects: Array<object> = [];
    constructor(intervalFields: Array<string>) {
        this.intervalFields = intervalFields;
    }
    public validateIntervalData(): Array<object> {
        if (this.intervalFields.length > 0) {
            this.analyseIntervalData();
            this.validateObjectsLength();
            return this.getAnalysedIntervalData().intervalDataObjects;
        }
        return [];
    }
    private validateObjectsLength() {
        for (var objIndex = 0; objIndex < this.intervalDataObjects.length; objIndex += 1) {
            const currentObject = this.intervalDataObjects[objIndex];
            const currentObjectLength = Object.keys(currentObject).length;
            if (currentObjectLength !== this.intervalFields.length) {
                this.removeInvalidObject(objIndex);
            }
        }
    }
    private removeInvalidObject(index: number) {
        this.intervalDataObjects.splice(index, 1);
    }

    private analyseIntervalData() {
        for (const currentObject of this.dataObjects) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            for (const [key, value] of Object.entries(currentObject)) {
                if (this.intervalFields.includes(key)) {
                    if (
                        AnalyseIntervalData.dataIsFloat(value as string) &&
                        AnalyseIntervalData.dataIsNotIPAddress(value as string)
                    ) {
                        // @ts-ignore
                        objectToAdd[key] = AnalyseIntervalData.convertDataToFloat(value);
                    }
                }
            }
            this.intervalDataObjects.push(objectToAdd);
        }
    }
    private static dataIsNotIPAddress(data: string): boolean {
        let decimalPointCount = 0;
        for (const character of data) {
            if (character === '.') {
                decimalPointCount += 1;
            }
        }
        return decimalPointCount <= 1;
    }
    private static dataIsFloat(data: string): boolean {
        const dataAsFloat = parseFloat(data);
        return !isNaN(dataAsFloat);
    }
    private static convertDataToFloat(data: string): number {
        return parseFloat(data);
    }
    private getAnalysedIntervalData(): { intervalFields: Array<string>; intervalDataObjects: Array<object> } {
        return {
            intervalFields: this.intervalFields,
            intervalDataObjects: this.intervalDataObjects,
        };
    }
}
