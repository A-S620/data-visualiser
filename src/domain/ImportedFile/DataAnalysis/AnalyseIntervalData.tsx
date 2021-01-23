import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import CreateAnalysedData from '../../ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { store } from '../../../ReduxStore/store';

export class AnalyseIntervalData {
    private readonly dataAsObjects = store.getState().importedData.dataAsObjects;
    private intervalFields: any;
    private intervalDataAsObjects: Array<object> = [];
    constructor(intervalFields: Array<string>) {
        this.intervalFields = intervalFields;
    }
    public validateIntervalData(): NotificationsHandler {
        const notifications: NotificationsHandler = new NotificationsHandler();
        if (this.intervalFields.length > 0) {
            this.analyseIntervalData();
            notifications.concat(this.validateObjectsLength());
            return notifications;
        }
        return notifications;
    }
    private validateObjectsLength(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        for (var objIndex = 0; objIndex < this.intervalDataAsObjects.length; objIndex += 1) {
            const currentObject = this.intervalDataAsObjects[objIndex];
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
        this.intervalDataAsObjects.splice(index, 1);
    }

    private analyseIntervalData() {
        for (var objIndex = 0; objIndex < this.dataAsObjects.length; objIndex += 1) {
            const objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataAsObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (this.intervalFields.includes(key)) {
                    if (AnalyseIntervalData.dataIsFloat(value) && AnalyseIntervalData.dataIsNotIPAddress(value)) {
                        // @ts-ignore
                        objectToAdd[key] = AnalyseIntervalData.convertDataToFloat(value);
                    }
                }
            }
            this.intervalDataAsObjects.push(objectToAdd);
        }
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
    public getAnalysedIntervalData(): { intervalFields: Array<string>; intervalDataAsObjects: Array<object> } {
        return {
            intervalFields: this.intervalFields,
            intervalDataAsObjects: this.intervalDataAsObjects,
        };
    }
}
