import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
//Test Data
const intervalFields = ['col1', 'col2'];

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
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
        const createStoreHandler = new CreateAnalysedData(intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual(intervalFields);
    });
    it('Should add data as Objects to the intervalDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual(intervalDataObjects);
    });
});
