//A class that extracts the variables from the imported data source. Variables are stored as an Array of strings.
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
