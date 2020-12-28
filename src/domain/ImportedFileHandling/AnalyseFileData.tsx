import { Notifications } from '../UIHandlers/Notifications';
import CreateAnalysedData from '../ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { store } from '../../ReduxStore/store';

export class AnalyseFileData {
    private readonly dataAsObjects = store.getState().importedData.dataAsObjects;
    private integerFields: Array<string> = [];
    private integerDataAsObjects: Array<object> = [];
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
            notifications.concat(this.validateObjectLength());
            if (notifications.isEmpty()) {
                this.createAnalysedData();
            }

            return notifications;
        }
        return notifications;
    }
    private validateObjectLength(): Notifications {
        const notifications = new Notifications();
        for (var objIndex = 0; objIndex < this.integerDataAsObjects.length; objIndex += 1) {
            const currentObject = this.integerDataAsObjects[objIndex];
            const currentObjectLength = Object.keys(currentObject).length;
            if (currentObjectLength !== this.integerFields.length) {
                notifications.addNotification(
                    `One of the objects has ${currentObjectLength} fields, instead of ${this.integerFields.length}. All other values in that column, on other rows are floats. This object will be ignored`
                );
                return notifications;
            }
        }
        return notifications;
    }
    private analyseData(): Array<string> {
        for (var objIndex = 0; objIndex < this.dataAsObjects.length; objIndex += 1) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataAsObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (AnalyseFileData.dataIsFloat(value) && AnalyseFileData.dataIsNotIPAddress(value)) {
                    // @ts-ignore
                    objectToAdd[key] = AnalyseFileData.convertDataToFloat(value);
                    this.addKeyToIntegerFields(key);
                }
            }
            this.integerDataAsObjects.push(objectToAdd);
        }
        return this.integerFields;
    }
    private static dataIsNotIPAddress(data: string): boolean {
        let decimalPointCount = 0;
        for (var i = 0; i < data.length; i += 1) {
            if (data[i] === '.') {
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
    private addKeyToIntegerFields(key: string) {
        for (let index = 0; index < this.integerFields.length; index += 1) {
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
