import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { IFields } from '../../../../src/interfaces/import/IFields';
import { FieldTypes } from '../../../../src/interfaces/import/IAnalysedFileData';

const intervalFields = ['col1', 'col2', 'col3'];

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
const fields: IFields = { field: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }] };

describe('ResetImportedData domain component', () => {
    it('Should reset the intervalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual([]);
    });

    it('Should reset the dataAsObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createIntervalDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().integerDataAsObjects).toStrictEqual([]);
    });
    it('Should reset the fields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(fields, intervalFields, intervalDataObjects);
        createStoreHandler.createFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual([]);
    });
});
