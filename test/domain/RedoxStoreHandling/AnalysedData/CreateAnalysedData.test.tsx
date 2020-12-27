import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
//Test Data
const integerFields = ['col1', 'col2', 'col3'];

const integerDataObjects = [
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
    it('Should add integerFields to the integerFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerFields).toStrictEqual(integerFields);
    });
    it('Should add data as Objects to the integerDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual(integerDataObjects);
    });
});
