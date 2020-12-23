import { store } from '../../../ReduxStore/store';
import { IImportedFileData } from '../../interfaces/IImportedFileData';

export default class GetImportedData {
    private static getDataFields(): Array<string> {
        return store.getState().importedData.dataFields;
    }
    private static getDataAsArrays(): Array<Array<any>> {
        return store.getState().importedData.dataAsArrays;
    }
    private static getDataAsObjects(): Array<object> {
        return store.getState().importedData.dataAsObjects;
    }
    public getImportedData(): IImportedFileData {
        return {
            dataFields: GetImportedData.getDataFields(),
            dataAsObjects: GetImportedData.getDataAsObjects(),
            dataAsArrays: GetImportedData.getDataAsArrays(),
        };
    }
}
