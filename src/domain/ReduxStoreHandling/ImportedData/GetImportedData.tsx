import { store } from '../../../ReduxStore/store';
import { IImportedFileData } from '../../../interfaces/import/IImportedFileData';

export default class GetImportedData {
    private static getDataFields(): Array<string> {
        return store.getState().importedData.dataFields;
    }
    private static getDataAsArrays(): Array<Array<any>> {
        return store.getState().importedData.dataArrays;
    }
    private static getDataAsObjects(): Array<object> {
        return store.getState().importedData.dataObjects;
    }
    public getImportedData(): IImportedFileData {
        return {
            dataFields: GetImportedData.getDataFields(),
            dataObjects: GetImportedData.getDataAsObjects(),
            dataArrays: GetImportedData.getDataAsArrays(),
        };
    }
}
