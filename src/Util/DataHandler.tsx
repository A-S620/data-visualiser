import { FieldTypes, IAnalysedFileData } from '../Interfaces/Analyse/IAnalysedFileData';
import GetAnalysedData from '../Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';

export class DataHandler {
    public createDataMapWithCount(xValue: string, yValue: string, analysedData: Array<object>) {
        const dataMap = new Map();
        analysedData.forEach((obj) => {
            const convertedObj = JSON.stringify(this.createIntegerDataObject(xValue, yValue, obj));
            if (dataMap.has(convertedObj)) {
                dataMap.get(convertedObj).count += 1;
            } else {
                dataMap.set(convertedObj, { count: 1 });
            }
        });
        return dataMap;
    }
    public checkDataType(field: string, fields: Array<Object>): FieldTypes {
        // @ts-ignore
        const index = fields.findIndex((object) => Object.values(object)[0] === field);
        const fieldObject = Object.values(fields[index]);
        return fieldObject[1];
    }
    public createArrayFromDataMap(xValue: string, yValue: string, dataMap: Map<any, any>) {
        const data: Array<object> = [];
        dataMap.forEach((value, key) => {
            const keyValues = Object.values(JSON.parse(key));
            data.push({ x: keyValues[0], y: keyValues[1] });
        });
        return data.sort((a, b) => (Object.values(a)[0] > Object.values(b)[0] ? 1 : -1));
    }

    public createIntegerDataObject(xValue: string, yValue: string, currentObject: Object): Object {
        let x: number = 0;
        let y: number = 0;
        for (const [key, value] of Object.entries(currentObject)) {
            if (key === xValue) {
                x = value;
            } else if (key === yValue) {
                y = value;
                return { x, y };
            }
        }
        return {};
    }
    public createAngleObjectFromColumnPercent(column: string, analysedDataObjects: Array<object>): Array<object> {
        const angleObjectsArray: Array<object> = [];
        analysedDataObjects.forEach((dataObject, key) => {
            for (const [key, value] of Object.entries(dataObject)) {
                if (key === column) {
                    value.forEach((valueObject: object) => {
                        angleObjectsArray.push({
                            angle: Object.values(valueObject)[2],
                            label: Object.values(valueObject)[0],
                        });
                    });
                }
            }
        });
        return angleObjectsArray;
    }
    public getAnalysedData(): IAnalysedFileData {
        const getAnalysedData = new GetAnalysedData();
        return getAnalysedData.get();
    }
    public createNonIntegerDataObject(valueObject: object, yValue: string): object {
        let x: string = '';
        let y: number = 0;
        for (const [key, value] of Object.entries(valueObject)) {
            if (key === 'name') {
                x = value;
            } else if (key === yValue) {
                y = value;
                return { x, y };
            }
        }
        return {};
    }

    public getNonIntegerFieldValues(xValue: string): object {
        const { nominalDataObjects } = this.getAnalysedData();
        const { ordinalDataObjects } = this.getAnalysedData();
        const { binaryDataObjects } = this.getAnalysedData();
        const allObjects = [...nominalDataObjects, ...ordinalDataObjects, ...binaryDataObjects];
        for (var index = 0; index < allObjects.length; index += 1) {
            if (Object.keys(allObjects[index])[0] === xValue) {
                return allObjects[index];
            }
        }
        return {};
    }
    public createNonIntegerDataArray(xValue: string, yValue: string): Array<object> {
        const fieldValues = this.getNonIntegerFieldValues(xValue);
        const arrayOfValues = Object.values(fieldValues)[0];
        const data: Array<Object> = [];
        for (var index = 0; index < arrayOfValues.length; index += 1) {
            const valueObject = arrayOfValues[index];
            const dataObject = this.createNonIntegerDataObject(valueObject, yValue);
            data.push(dataObject);
        }
        return data;
    }
    public createIntegerDataArray(xValue: string, yValue: string, dataObjectsArray: Array<object>): Array<object> {
        const data: Array<Object> = [];
        for (let objIndex = 0; objIndex < dataObjectsArray.length; objIndex += 1) {
            const dataObject = this.createIntegerDataObject(xValue, yValue, dataObjectsArray[objIndex]);
            data.push(dataObject);
        }
        return data;
    }
}
