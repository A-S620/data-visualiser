import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

const integerFields = ['col1', 'col2', 'col3'];

const integerDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
describe('ResetImportedData domain component', () => {
    it('Should reset the integerFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerFields).toStrictEqual([]);
    });

    it('Should reset the dataAsObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(integerFields, integerDataObjects);
        createStoreHandler.createIntegerDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual([]);
    });
});
