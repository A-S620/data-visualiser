import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/Domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';

describe('ResetImportedData domain component', () => {
    it('Should reset the fields attribute in the analysedData slice', () => {
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
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual([]);
    });
    it('Should reset the intervalFields attribute in the analysedData slice', () => {
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
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalFields).toStrictEqual([]);
    });

    it('Should reset the intervalDataAsObjects attribute in the analysedData slice', () => {
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
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalDataObjects).toStrictEqual([]);
    });
    it('Should reset the nominalFields attribute in the analysedData slice', () => {
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
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().nominalFields).toStrictEqual([]);
    });

    it('Should reset the nominalDataAsObjects attribute in the analysedData slice', () => {
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
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createNominalDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().nominalDataObjects).toStrictEqual([]);
    });
});
