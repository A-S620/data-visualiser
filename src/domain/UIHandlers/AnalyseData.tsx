//A class that handles analysed data
//Other domain components
import { Notifications } from './Notifications';
import GetImportedData from '../ReduxStoreHandling/ImportedData/GetImportedData';
import CreateAnalysedData from '../ReduxStoreHandling/AnalysedData/CreateAnalysedData';

export class AnalyseData {
    private dataFields: Array<string>;
    private dataAsObjects: Array<object>;
    private integerFields: Array<string> = [];
    private integerDataAsObjects: Array<object> = [];

    constructor(dataFields: Array<string>, dataAsObjects: Array<object>) {
        this.dataFields = dataFields;
        this.dataAsObjects = dataAsObjects;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        this.analyseData();
        if (this.integerFields.length < 2) {
            notifications.addNotification(
                `Imported Data doesn't contain more than 2 integer fields, so it cannot be visualised`
            );
            return notifications;
        }
        if (this.integerFields.length >= 2) {
            this.createAnalysedData();
            notifications.addNotification(
                `Imported file has the following integer fields ${this.integerFields}, and can be visualised`
            );
        }
        return notifications;
    }
    private analyseData(): Array<string> {
        for (var objIndex = 0; objIndex < this.dataAsObjects.length; objIndex += 1) {
            let objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataAsObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (this.dataIsFloat(value)) {
                    const valueAsFloat = this.convertDataToFloat(value);
                    // @ts-ignore
                    objectToAdd[key] = valueAsFloat;
                    this.addKeyToIntegerFields(key);
                }
            }
            this.integerDataAsObjects.push(objectToAdd);
            objectToAdd = {};
        }
        return this.integerFields;
    }
    private dataIsFloat(data: string): Boolean {
        const dataAsFloat = parseFloat(data);
        return !isNaN(dataAsFloat);
    }
    private convertDataToFloat(data: string): Number {
        const dataAsFloat = parseFloat(data);
        return dataAsFloat;
    }
    private addKeyToIntegerFields(key: string) {
        for (var index = 0; index < this.integerFields.length; index += 1) {
            if (this.integerFields[index] === key) {
                return;
            }
        }
        this.integerFields.push(key);
    }
    private createAnalysedData() {
        const createAnalysedData = new CreateAnalysedData(this.integerFields, this.integerDataAsObjects);
        createAnalysedData.createIntegerDataObjects();
        createAnalysedData.createIntegerFields();
    }
}
