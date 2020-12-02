//Processes imported JSON files

//Other domain components

const papa = require('papaparse');
const { Parser } = require('json2csv');

export default class JSONProcessor {
    private JSONFile: any;
    constructor(JSONFile: any) {
        this.JSONFile = JSONFile;
    }
    public getJSONFile(): any {
        return this.JSONFile;
    }
    public getFields(): Array<string> {
        let firstRow = '';
        for (var i = 0; i < this.JSONFile.length && this.JSONFile[i] !== '}'; i += 1) {
            firstRow = firstRow + this.JSONFile[i];
        }
        firstRow = firstRow + '}';
        const firstRowParsed = JSON.parse(firstRow);
        const test = [];
        test.push(firstRowParsed);
        console.log(test);
        return Object.keys(firstRowParsed);
    }
    public convertToCSV(): string {
        const fields = this.getFields();
        const opts = { fields };
        const parser = new Parser(opts);
        const csv = parser.parse(this.JSONFile);
        return csv;
    }
    // public JSONToObjects(): Array<object> {
    //     const result = [];
    //     for (var i = 0; i < this.JSONFile.length; i += 1) {
    //         result.push(this.JSONFile[i]);
    //     }
    //     return result;
    // }
    // public JSONToArrays(): Array<Array<any>> {
    //     const result = papa.unparse(this.JSONFile, { header: false, skipEmptyLines: true });
    //     return result.data;
    // }
    // public getJSONColumns(): Array<string> {
    //     const keys = [];
    //     for (const [key, value] of Object.entries(this.JSONFile[0])) {
    //         keys.push(key);
    //     }
    //     return keys;
    // }
}
