import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';

const intervalFields = ['col1', 'col2', 'col3'];

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
describe('ResetImportedData domain component', () => {
    it('Should reset the intervalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual([]);
    });

    it('Should reset the dataAsObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual([]);
    });
});
