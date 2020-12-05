//Processes imported CSV files

//Other domain components
import { Notifications } from '../UIHandlers/Notifications';

const papa = require('papaparse');

export default class CSVProcessor {
    private csvFile: any;
    constructor(csvFile: string) {
        this.csvFile = csvFile;
    }
    public getCSVFile(): string {
        return this.csvFile;
    }
    public csvToObjects(): Array<object> {
        const result = papa.parse(this.csvFile, { header: true, skipEmptyLines: true });
        return result.data;
    }
    public csvToArrays(): Array<Array<any>> {
        const result = papa.parse(this.csvFile, { skipEmptyLines: true });
        return result.data;
    }
    public getCSVFields(): Array<string> {
        var dataFields: string[];
        dataFields = [];
        for (let i = 0; i < this.csvToArrays()[0].length; i += 1) {
            dataFields.push(this.csvToArrays()[0][i]);
        }
        return dataFields;
    }
}
