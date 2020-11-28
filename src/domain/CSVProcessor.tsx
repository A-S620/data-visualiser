//Processes imported CSV files

//Other domain components
import { Notifications } from './Notifications';

const papa = require('papaparse');

export default class CSVProcessor {
    private CSVFile: any;
    constructor(CSVFile: string) {
        this.CSVFile = CSVFile;
    }
    public getCSVFile(): string {
        return this.CSVFile;
    }
    public CSVToObjects(): Array<object> {
        const result = papa.parse(this.CSVFile, { header: true });
        const dataObjects: Array<object> = [];
        return result.data;
    }
    public CSVToArrays(): Array<Array<any>> {
        const result = papa.parse(this.CSVFile);
        return result.data;
    }
    public getCSVColumns(): Array<string> {
        var columns: string[];
        columns = [];
        const allData = this.CSVToArrays();
        for (let i = 0; i < allData[0].length; i += 1) {
            columns.push(allData[0][i]);
        }
        return columns;
    }
}
