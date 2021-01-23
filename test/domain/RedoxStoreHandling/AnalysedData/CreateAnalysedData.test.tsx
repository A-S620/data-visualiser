import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { IFields } from '../../../../src/interfaces/import/IFields';
import { FieldTypes, IAnalysedFileData } from '../../../../src/interfaces/import/IAnalysedFileData';
//Test Data
const intervalFields = ['col1', 'col2'];

const intervalDataAsObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
const fields = [{ field: 'col1', fieldType: FieldTypes.INTERVAL }];

const analysedFileData: IAnalysedFileData = {
    fields: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }],
    intervalFields: ['col1', 'col2'],
    intervalDataAsObjects: [
        { col1: 32, col2: 45 },
        { col1: 79, col2: 5 },
        { col1: 76, col2: 23 },
    ],
};
//Runs before each test
beforeEach(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
//Runs after all test
afterAll(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('CreateAnalysedData domain component', () => {
    it('Should add intervalFields to the intervalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual(intervalFields);
    });
    it('Should add data as Objects to the intervalDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalDataAsObjects).toStrictEqual(intervalDataAsObjects);
    });
    it('Should fields to the fields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual(fields);
    });
});
