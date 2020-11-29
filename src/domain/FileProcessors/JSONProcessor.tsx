//Processes imported JSON files

//Other domain components
import { Notifications } from '../UIHandlers/Notifications';

const papa = require('papaparse');

export default class JSONProcessor {
    private JSONFile: any;
    constructor(JSONFile: string) {
        this.JSONFile = JSONFile;
    }
    public getJSONFile(): string {
        return this.JSONFile;
    }
    public JSONToObjects(): Array<object> {
        const result = this.JSONFile;
        const dataObjects: Array<object> = [];
        dataObjects.push(result);
        return dataObjects;
    }
    public JSONToArrays(): Array<Array<any>> {
        const result = papa.unparse(this.JSONFile, { header: false, skipEmptyLines: true });
        return result.data;
    }
    public getJSONColumns(): Array<string> {
        var columns: string[];
        columns = [];
        const allData = this.JSONToArrays();
        for (let i = 0; i < allData[0].length; i += 1) {
            columns.push(allData[0][i]);
        }
        return columns;
    }
}