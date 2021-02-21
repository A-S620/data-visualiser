import { store } from '../../../ReduxStore/store';

export class AnalyseIgnoreData {
    private readonly dataObjects = store.getState().importedData.dataObjects;
    private ignoreFields: any;
    private ignoreDataObjects: Array<object> = [];
    constructor(ignoreFields: Array<string>) {
        this.ignoreFields = ignoreFields;
    }
    public validateIgnoreData(): Array<object> {
        if (this.ignoreFields.length > 0) {
            this.analyseIgnoreData();
            return this.getIgnoredData().ignoreDataObjects;
        }
        return [];
    }

    private analyseIgnoreData() {
        for (var objIndex = 0; objIndex < this.dataObjects.length; objIndex += 1) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (this.ignoreFields.includes(key)) {
                    // @ts-ignore
                    objectToAdd[key] = value;
                }
            }
            this.ignoreDataObjects.push(objectToAdd);
        }
    }
    private getIgnoredData(): { ignoreFields: Array<string>; ignoreDataObjects: Array<object> } {
        return {
            ignoreFields: this.ignoreFields,
            ignoreDataObjects: this.ignoreDataObjects,
        };
    }
}
