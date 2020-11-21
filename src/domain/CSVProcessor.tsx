//Imports from libraries

//Other domain components
import { Notifications } from './Notifications';

const papa = require('papaparse');

export default class CSVProcessor {
    //https://github.com/typeiii/jquery-csv
    private CSVFile: any;
    constructor(CSVFile: string) {
        this.CSVFile = CSVFile;
    }
    public getCSVFile(): string {
        return this.CSVFile;
    }
    public CSVToArrays(): Array<Array<any>> {
        const result = papa.parse(this.CSVFile);
        return result.data;
    }
    public getCSVColumns(): Array<string> {
        var columns: string[];
        columns = [];
        const allData = this.CSVToArrays();
        for (var i = 0; i < allData[0].length; i += 1) {
            columns.push(allData[0][i]);
        }
        return columns;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        return notifications;
    }
}
