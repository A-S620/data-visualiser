//Processes imported JSON files

//Other domain components

const papa = require('papaparse');
const { Parser } = require('json2csv');

export default class JSONProcessor {
    private jsonFile: any;
    constructor(jsonFile: any) {
        this.jsonFile = jsonFile;
    }
    public getJSONFile(): any {
        return this.jsonFile;
    }
    public getJSONFields(): Array<string> {
        let firstRow = '';
        for (var i = 0; i < this.jsonFile.length && this.jsonFile[i] !== '}'; i += 1) {
            firstRow = firstRow + this.jsonFile[i];
        }
        firstRow = firstRow + '}';
        const firstRowParsed = JSON.parse(firstRow);
        return Object.keys(firstRowParsed);
    }
    public jsonToObjects(): Array<object> {
        let jsonObject = '';
        const objectsArray = [];
        for (var i = 0; i < this.jsonFile.length; i += 1) {
            if (this.jsonFile[i] !== '}') {
                jsonObject = jsonObject + this.jsonFile[i];
            } else {
                jsonObject = jsonObject + '}';
                const rowParsed = JSON.parse(jsonObject);
                objectsArray.push(rowParsed);
                jsonObject = '';
            }
        }
        return objectsArray;
    }
    public jsonToArrays(): Array<Array<any>> {
        const jsonAsCSV = this.convertToCSV(this.jsonToObjects());
        const result = papa.parse(jsonAsCSV, { skipEmptyLines: true });
        return result.data;
    }
    private convertToCSV(JSONObjects: Array<object>): string {
        const fields = this.getJSONFields();
        const opts = { fields };
        const parser = new Parser(opts);
        const csv = parser.parse(JSONObjects);
        return csv;
    }
}
