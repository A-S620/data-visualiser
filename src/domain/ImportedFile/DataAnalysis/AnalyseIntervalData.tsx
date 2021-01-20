import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import CreateAnalysedData from '../../ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { store } from '../../../ReduxStore/store';

export class AnalyseIntervalData {
    private readonly dataAsObjects = store.getState().importedData.dataAsObjects;
    private intervalFields: Array<string> = [];
    private integerDataAsObjects: Array<object> = [];
    public validateIntervalData(): NotificationsHandler {
        const notifications: NotificationsHandler = new NotificationsHandler();
        this.analyseIntervalData();
        if (this.intervalFields.length < 2) {
            notifications.addNotification(
                `Imported Data doesn't contain more than 2 integer fields, so it cannot be visualised`
            );
            return notifications;
        }
        if (this.intervalFields.length >= 2) {
            notifications.concat(this.validateObjectsLength());
            this.createAnalysedData();
        }
        return notifications;
    }
    private validateObjectsLength(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        for (var objIndex = 0; objIndex < this.integerDataAsObjects.length; objIndex += 1) {
            const currentObject = this.integerDataAsObjects[objIndex];
            const currentObjectLength = Object.keys(currentObject).length;
            if (currentObjectLength !== this.intervalFields.length) {
                notifications.addNotification(
                    `One or more of the objects has ${currentObjectLength} fields, instead of ${this.intervalFields.length}. All other values in that column, on other rows are floats. These object will be ignored`
                );
                this.removeInvalidObject(objIndex);
            }
        }
        return notifications;
    }
    private removeInvalidObject(index: number) {
        this.integerDataAsObjects.splice(index, 1);
    }

    private analyseIntervalData(): Array<string> {
        for (var objIndex = 0; objIndex < this.dataAsObjects.length; objIndex += 1) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataAsObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (AnalyseIntervalData.dataIsFloat(value) && AnalyseIntervalData.dataIsNotIPAddress(value)) {
                    // @ts-ignore
                    objectToAdd[key] = AnalyseIntervalData.convertDataToFloat(value);
                    this.addKeyToIntegerFields(key);
                }
            }
            this.integerDataAsObjects.push(objectToAdd);
        }
        return this.intervalFields;
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
        for (let index = 0; index < this.intervalFields.length; index += 1) {
            if (this.intervalFields[index] === key) {
                return;
            }
        }
        this.intervalFields.push(key);
    }
    private createAnalysedData() {
        const createAnalysedData = new CreateAnalysedData(this.intervalFields, this.integerDataAsObjects);
        createAnalysedData.createIntervalDataObjects();
        createAnalysedData.createIntervalFields();
    }
}
