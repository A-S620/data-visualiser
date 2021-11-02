import { reduxStore } from '../../../ReduxStore/reduxStore';

export class AnalyseIgnoreData {
    private readonly dataObjects = reduxStore.getState().importedData.dataObjects;
    private readonly ignoreFields: any;
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
        for (const currentObject of this.dataObjects) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
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
