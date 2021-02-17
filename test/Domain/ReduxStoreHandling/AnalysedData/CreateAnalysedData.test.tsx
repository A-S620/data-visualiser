import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';

const analysedFileData: IAnalysedFileData = {
    fields: [
        { field: 'col1', fieldType: FieldTypes.INTERVAL },
        { field: 'col2', fieldType: FieldTypes.INTERVAL },
        { field: 'col3', fieldType: FieldTypes.NOMINAL },
        { field: 'col4', fieldType: FieldTypes.ORDINAL },
    ],
    intervalFields: ['col1', 'col2'],
    intervalDataObjects: [
        { col1: 32, col2: 45 },
        { col1: 79, col2: 5 },
        { col1: 76, col2: 23 },
    ],
    nominalFields: ['col3'],
    nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
    ordinalFields: ['col4'],
    ordinalDataObjects: [{ name: '15-20', count: 5, percentage: 20 }],
    binaryFields: [],
    binaryDataObjects: [],
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
    it('Should fields to the fields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
        ]);
    });
    it('Should add intervalFields to the intervalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual(['col1', 'col2']);
    });
    it('Should add interval data as Objects to the intervalDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalDataObjects).toStrictEqual([
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('Should add nominalFields to the nominalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().nominalFields).toStrictEqual(['col3']);
    });
    it('Should add nominal data Objects to the nominalDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().nominalDataObjects).toStrictEqual([
            { col3: 'female' },
            { col3: 'male' },
            { col3: 'female' },
        ]);
    });
    it('Should add ordinalFields to the ordinalFields attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createOrdinalFields();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().ordinalFields).toStrictEqual(['col4']);
    });
    it('Should add ordinal data Objects to the ordinalDataObjects attribute in the analysedData slice', () => {
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createOrdinalDataObjects();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().ordinalDataObjects).toStrictEqual([
            { name: '15-20', count: 5, percentage: 20 },
        ]);
    });
});
