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
        var columns: string[];
        columns = [];
        const allData = this.csvToArrays();
        for (let i = 0; i < allData[0].length; i += 1) {
            columns.push(allData[0][i]);
        }
        return columns;
    }
}
