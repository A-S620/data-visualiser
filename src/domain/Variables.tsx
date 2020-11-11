//A class that extracts the variables from the imported data source
//Interfaces
import { IVariables } from './interfaces/IVariables';

export class ImportedDataVariables {
    private importedDataVariables: any;
    constructor(importedDataVariables: Array<string>) {
        this.importedDataVariables = importedDataVariables;
    }
    public getImportedDataVariableds(): IVariables {
        return this.importedDataVariables;
    }
}
