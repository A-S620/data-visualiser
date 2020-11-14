//A class that extracts the variables from the imported data source. Variables are stored as an Array of strings.
//Interfaces
import { IVariables } from './interfaces/IVariables';

//Other domain components
import { Notifications } from './Notifications';

export class ImportedDataVariables {
    private importedDataVariables: any;
    constructor(importedDataVariables: Array<string>) {
        this.importedDataVariables = importedDataVariables;
    }
    //Return of type IVariable
    public getImportedDataVariableds(): IVariables {
        return this.importedDataVariables;
    }
    //Validates the variables, return of type Notifications
    public validateVariables(): Notifications {
        const notifications: Notifications = new Notifications();
        if (this.importedDataVariables.length === 0) {
            //TODO: Add general imported file validation
            notifications.addNotification('Imported Data Source is empty');
            return notifications;
        }
        return notifications;
    }
}
