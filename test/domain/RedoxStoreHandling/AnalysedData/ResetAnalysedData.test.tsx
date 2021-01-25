import 'jsdom-global/register';

import CreateAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/CreateAnalysedData';
import GetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ResetAnalysedData from '../../../../src/domain/ReduxStoreHandling/AnalysedData/ResetAnalysedData';
import { FieldTypes, IAnalysedFileData } from '../../../../src/interfaces/import/IAnalysedFileData';

const intervalFields = ['col1', 'col2', 'col3'];

const intervalDataObjects = [
    { col1: 32, col2: 45 },
    { col1: 79, col2: 5 },
    { col1: 76, col2: 23 },
];
const fields = [{ field: 'col1', fieldType: FieldTypes.INTERVAL }];

describe('ResetImportedData domain component', () => {
    it('Should reset the intervalFields attribute in the analysedData slice', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }],
            intervalFields: ['col1', 'col2'],
            intervalDataAsObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
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
            fields: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }],
            intervalFields: ['col1', 'col2'],
            intervalDataAsObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createIntervalDataObjects();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().intervalDataAsObjects).toStrictEqual([]);
    });
    it('Should reset the fields attribute in the analysedData slice', () => {
        const analysedFileData: IAnalysedFileData = {
            fields: [{ field: 'col1', fieldType: FieldTypes.INTERVAL }],
            intervalFields: ['col1', 'col2'],
            intervalDataAsObjects: [
                { col1: 32, col2: 45 },
                { col1: 79, col2: 5 },
                { col1: 76, col2: 23 },
            ],
        };
        const createStoreHandler = new CreateAnalysedData(analysedFileData);
        createStoreHandler.createFields();
        const resetStoreHandler = new ResetAnalysedData();
        resetStoreHandler.resetAnalysedData();
        const getStoreHandler = new GetAnalysedData();
        expect(getStoreHandler.getAnalysedData().fields).toStrictEqual([]);
    });
});
