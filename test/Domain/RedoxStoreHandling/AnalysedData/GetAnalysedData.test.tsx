import 'jsdom-global/register';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';

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
    it('Should return the correct fields if the getFields method is called', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ],
            intervalFields: ['col1', 'col2'],
            intervalDataObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
            nominalFields: ['col3'],
            nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
            ordinalFields: [],
            ordinalDataObjects: [],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
        ]);
    });
    it('Should return the correct intervalFields if the getIntegerFields method is called', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ],
            intervalFields: ['col1', 'col2'],
            intervalDataObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
            nominalFields: ['col3'],
            nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
            ordinalFields: [],
            ordinalDataObjects: [],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual(['col1', 'col2']);
    });

    it('Should return the correct data as objects if the getIntegerDataObjects method is called', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ],
            intervalFields: ['col1', 'col2'],
            intervalDataObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
            nominalFields: ['col3'],
            nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
            ordinalFields: [],
            ordinalDataObjects: [],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalDataObjects();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().intervalDataObjects).toStrictEqual([
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('Should return the correct nominalFields if the getNominalFields method is called', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ],
            intervalFields: ['col1', 'col2'],
            intervalDataObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
            nominalFields: ['col3'],
            nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
            ordinalFields: [],
            ordinalDataObjects: [],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalFields();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().nominalFields).toStrictEqual(['col3']);
    });

    it('Should return the correct nominal data objects if the getNominalDataObjects method is called', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [
                { field: 'col1', fieldType: FieldTypes.INTERVAL },
                { field: 'col2', fieldType: FieldTypes.INTERVAL },
                { field: 'col3', fieldType: FieldTypes.NOMINAL },
            ],
            intervalFields: ['col1', 'col2'],
            intervalDataObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
            nominalFields: ['col3'],
            nominalDataObjects: [{ col3: 'female' }, { col3: 'male' }, { col3: 'female' }],
            ordinalFields: [],
            ordinalDataObjects: [],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalDataObjects();
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.getAnalysedData().nominalDataObjects).toStrictEqual([
            { col3: 'female' },
            { col3: 'male' },
            { col3: 'female' },
        ]);
    });
});
