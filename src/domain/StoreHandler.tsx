export default class StoreHandler {
    private columns: any;
    private dataAsObjects: any;
    private dataAsArrays: any;
    constructor(columns: Array<string>, dataAsObjects: Array<object>, dataAsArrays: Array<Array<any>>) {
        this.columns = columns;
        this.dataAsObjects = dataAsObjects;
        this.dataAsArrays = dataAsArrays;
    }
    //create columns in store
    //create data in store
}
