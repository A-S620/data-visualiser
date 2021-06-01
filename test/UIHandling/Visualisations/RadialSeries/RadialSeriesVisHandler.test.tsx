import React from 'react';
import 'jsdom-global/register';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import RadialSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import { RadialSeriesVisHandler } from '../../../../src/UIHandling/Visualisations/Radial/RadialSeriesVisHandler';
import CurrentRadialVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';

beforeAll(() => {
    const testData: IImportedFileData = {
        dataFields: ['col1', 'col2', 'col3'],
        dataObjects: [
            { col1: 'hot', col2: 'red', col3: 'foo' },
            { col1: 'cold', col2: 'green', col3: 'foo' },
            { col1: 'warm', col2: 'yellow', col3: 'foo' },
        ],
        dataArrays: [],
    };
    new ImportedData().create(testData);
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.NOMINAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
    new RadialSeriesOptions().create({
        height: 500,
        width: 500,
        column: 'col1',
    });
});
afterAll(() => {
    new RadialSeriesOptions().reset();
});

describe('RadialSeriesVisHandler domain component', () => {
    it('Should return the default visualisation options when createDefaultVisual is called', () => {
        new RadialSeriesVisHandler().createDefaultVisual();
        expect(new CurrentRadialVisual().get()).toEqual({ data: [], height: 0, width: 0 });
    });
    it('Should create the visualisation when createVisual is called', () => {
        new RadialSeriesVisHandler().createVisual();
        expect(new CurrentRadialVisual().get()).toEqual({
            data: [
                { angle: 33, label: 'hot' },
                { angle: 33, label: 'cold' },
                { angle: 33, label: 'warm' },
            ],
            height: 500,
            width: 500,
        });
    });
    it('Should reset the radial options when the reset method is called', () => {
        new RadialSeriesVisHandler().reset();
        expect(new CurrentRadialVisual().get()).toEqual({});
    });
});
