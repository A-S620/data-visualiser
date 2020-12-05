//A class that handles the imported data.
//Interfaces

//Other domain components
import { Notifications } from './Notifications';
import CSVProcessor from '../FileProcessors/CSVProcessor';
import CreateImportedDataState from '../ReduxStateHandlers/ImportedDataHandlers/CreateImportedDataState';
import JSONProcessor from '../FileProcessors/JSONProcessor';
//Interfaces
import { FileType, IFileType } from '../interfaces/IFileType';

export class ImportData {
    private importedData: any;
    private fileType: FileType;
    constructor(importedData: string, fileType: FileType) {
        this.importedData = importedData;
        this.fileType = fileType;
    }
    public validate(): Notifications {
        const notifications: Notifications = new Notifications();
        if (this.importedData.length === 0) {
            notifications.addNotification(`File is empty`);
            return notifications;
        }
        if (this.fileType === FileType.JSON) {
            this.processJSON();
        }
        if (this.fileType === FileType.CSV) {
            this.processCSV();
        }

        return notifications;
    }
    private processCSV() {
        const csvProcessor = new CSVProcessor(this.importedData);
        this.storeHandler(csvProcessor.getCSVFields(), csvProcessor.csvToObjects(), csvProcessor.csvToArrays());
    }
    private processJSON() {
        const jsonProcessor = new JSONProcessor(this.importedData);
        this.storeHandler(jsonProcessor.getJSONFields(), jsonProcessor.jsonToObjects(), jsonProcessor.jsonToArrays());
    }
    private storeHandler(dataFields: Array<string>, fileAsObjects: Array<object>, fileAsArray: Array<Array<any>>) {
        const storeHandler = new CreateImportedDataState(dataFields, fileAsObjects, fileAsArray);
        storeHandler.createDataFields();
        storeHandler.createDataAsArrays();
        storeHandler.createDataAsObjects();
    }
}
