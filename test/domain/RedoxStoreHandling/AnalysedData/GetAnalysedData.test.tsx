import 'jsdom-global/register';
import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { IFields } from '../../../../src/interfaces/import/IFields';
import { FieldTypes } from '../../../../src/interfaces/import/IAnalysedFileData';

//Test Data
const intervalFields = ['col1', 'col2', 'col3'];

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
const fields: IFields = { field: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }] };
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
describe('ResetAnalysedData domain component', () => {
    it('Should return the correct intervalFields if the getIntegerFields method is called', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual(intervalFields);
    });

    it('Should return the correct data as objects if the getIntegerDataObjects method is called', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalDataObjects();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual(intervalDataObjects);
    });
    it('Should return the correct fields if the getFields method is called', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual(fields);
    });
});
