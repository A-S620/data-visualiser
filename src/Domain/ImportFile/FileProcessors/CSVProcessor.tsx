import { IImportedFileData } from '../../../Interfaces/import/IImportedFileData';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';

const papa = require('papaparse');

export default class CSVProcessor {
    private readonly csvFile: any;
    constructor(csvFile: string) {
        this.csvFile = csvFile;
    }
    public getCSVFile(): string {
        return this.csvFile;
    }
    public validateCSV(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const result = papa.parse(this.csvFile, { header: true, skipEmptyLines: true });
        const csvErrors = result.errors;
        if (csvErrors.length !== 0) {
            for (const error of csvErrors) {
                notifications.addNotification(`${error.type}: ${error.message}, Row: ${error.row}`);
            }
            return notifications;
        }
        return notifications;
    }
    public getImportedFileData(): IImportedFileData {
        return {
            dataFields: this.getCSVFields(),
            dataObjects: this.csvToObjects(),
            dataArrays: this.csvToArrays(),
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
        for (const field of this.csvToArrays()[0]) {
            dataFields.push(field);
        }
        return dataFields;
    }
}
