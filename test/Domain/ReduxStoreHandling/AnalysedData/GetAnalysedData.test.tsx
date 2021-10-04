import 'jsdom-global/register';
import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';

//Runs before each test
beforeEach(() => {
    const analysedFileData: IAnalysedFileData = {
        fields: [
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
            { field: 'col5', fieldType: FieldTypes.BINARY },
            { field: 'col6', fieldType: FieldTypes.IGNORE },
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
        binaryFields: ['col5'],
        binaryDataObjects: [{ name: 'true', count: 5, percentage: 20 }],
        ignoreFields: ['col6'],
        ignoreDataObjects: [{ col6: 'female' }, { col6: 'male' }, { col6: 'female' }],
    };
    const createStoreHandler = new CreateAnalysedData(analysedFileData);
    createStoreHandler.createAll();
});
//Runs after all test
afterEach(() => {
    const resetAnalysedData = new ResetAnalysedData();
    resetAnalysedData.resetAnalysedData();
});
describe('ResetAnalysedData domain component', () => {
    it('Should return the correct fields if the getFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().fields).toStrictEqual([
            { field: 'col1', fieldType: FieldTypes.INTERVAL },
            { field: 'col2', fieldType: FieldTypes.INTERVAL },
            { field: 'col3', fieldType: FieldTypes.NOMINAL },
            { field: 'col4', fieldType: FieldTypes.ORDINAL },
            { field: 'col5', fieldType: FieldTypes.BINARY },
            { field: 'col6', fieldType: FieldTypes.IGNORE },
        ]);
    });
    it('Should return the correct intervalFields if the getIntegerFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().intervalFields).toStrictEqual(['col1', 'col2']);
    });

    it('Should return the correct data as objects if the getIntegerDataObjects method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().intervalDataObjects).toStrictEqual([
            { col1: 32, col2: 45 },
            { col1: 79, col2: 5 },
            { col1: 76, col2: 23 },
        ]);
    });
    it('Should return the correct nominalFields if the getNominalFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().nominalFields).toStrictEqual(['col3']);
    });

    it('Should return the correct nominal data objects if the getNominalDataObjects method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().nominalDataObjects).toStrictEqual([
            { col3: 'female' },
            { col3: 'male' },
            { col3: 'female' },
        ]);
    });
    it('Should return the correct ordinalFields if the getNominalFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().ordinalFields).toStrictEqual(['col4']);
    });
    it('Should return the correct ordinal data objects if the getNominalDataObjects method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().ordinalDataObjects).toStrictEqual([{ name: '15-20', count: 5, percentage: 20 }]);
    });
    it('Should return the correct binaryFields if the getBinaryFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().binaryFields).toStrictEqual(['col5']);
    });
    it('Should return the correct binary data objects if the getBinaryDataObjects method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().binaryDataObjects).toStrictEqual([{ name: 'true', count: 5, percentage: 20 }]);
    });
    it('Should return the correct ignoreFields if the getIgnoreFields method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().ignoreFields).toStrictEqual(['col6']);
    });
    it('Should return the correct ignore data objects if the getIgnoreDataObjects method is called', () => {
        const getStoreHandler = new GetAnalysedData();

        expect(getStoreHandler.get().ignoreDataObjects).toStrictEqual([
            { col6: 'female' },
            { col6: 'male' },
            { col6: 'female' },
        ]);
    });
});