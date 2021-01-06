import { IImportedFileData } from '../../../interfaces/import/IImportedFileData';
import { Notifications } from '../../../UIHandling/Notifications';

const papa = require('papaparse');

export default class CSVProcessor {
    private readonly csvFile: any;
    constructor(csvFile: string) {
        this.csvFile = csvFile;
    }
    public getCSVFile(): string {
        return this.csvFile;
    }
    public validateCSV(): Notifications {
        const notifications = new Notifications();
        const result = papa.parse(this.csvFile, { header: true, skipEmptyLines: true });
        const csvErrors = result.errors;
        if (csvErrors.length !== 0) {
            for (var i = 0; i < csvErrors.length; i += 1) {
                notifications.addNotification(
                    `${csvErrors[i].type}: ${csvErrors[i].message}, Row: ${csvErrors[i].row}`
                );
            }
            return notifications;
        }
        return notifications;
    }
    public getImportedFileData(): IImportedFileData {
        return {
            dataFields: this.getCSVFields(),
            dataAsObjects: this.csvToObjects(),
            dataAsArrays: this.csvToArrays(),
        };
    }
    private csvToObjects(): Array<object> {
        const result = papa.parse(this.csvFile, { header: true, skipEmptyLines: true });
        return result.data;
    }
    private csvToArrays(): Array<Array<any>> {
        const result = papa.parse(this.csvFile, { skipEmptyLines: true });
        return result.data;
    }
    private getCSVFields(): Array<string> {
        const dataFields: string[] = [];
        for (let i = 0; i < this.csvToArrays()[0].length; i += 1) {
            dataFields.push(this.csvToArrays()[0][i]);
        }
        return dataFields;
    }
}
