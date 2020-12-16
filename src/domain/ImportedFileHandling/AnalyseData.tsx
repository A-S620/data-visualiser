//A class that handles analysed data
//Other domain components
import { Notifications } from '../UIHandlers/Notifications';
import GetImportedData from '../ReduxStoreHandling/ImportedData/GetImportedData';
import CreateAnalysedData from '../ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import { store } from '../../ReduxStore/store';

export class AnalyseData {
    private readonly dataFields = store.getState().importedData.dataFields;
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
            this.createAnalysedData();
            return notifications;
        }
        return notifications;
    }
    private analyseData(): Array<string> {
        for (var objIndex = 0; objIndex < this.dataAsObjects.length; objIndex += 1) {
            let objectToAdd: Object = {};
            // eslint-disable-next-line prefer-destructuring
            const currentObject: Object = this.dataAsObjects[objIndex];
            for (const [key, value] of Object.entries(currentObject)) {
                if (this.dataIsFloat(value) && this.dataIsNotIPAddress(value)) {
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
    private dataIsNotIPAddress(data: string): Boolean {
        let decimalPointCount = 0;
        for (var i = 0; i < data.length; i += 1) {
            if (data[i] === '.') {
                decimalPointCount += 1;
            }
        }
        if (decimalPointCount <= 1) {
            return true;
        }
        return false;
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
