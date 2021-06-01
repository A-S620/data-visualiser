// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import 'jsdom-global/register';
import { IRadialSeriesOptions } from '../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { RadialSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/Radial/RadialSeriesOptionsHandler';
import CurrentRadialVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import ImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/ImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';

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
});
describe('Radial Series Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 500,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 0,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 500,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getSeries = new CurrentRadialVisual().get();
        expect(getSeries.data).toEqual([
            {
                angle: 33,
                label: 'red',
            },
            {
                angle: 33,
                label: 'green',
            },
            {
                angle: 33,
                label: 'yellow',
            },
        ]);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 500,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getCurrentVisual = new CurrentRadialVisual();
        expect(getCurrentVisual.get()).toEqual({
            data: [
                {
                    angle: 33,
                    label: 'red',
                },
                {
                    angle: 33,
                    label: 'green',
                },
                {
                    angle: 33,
                    label: 'yellow',
                },
            ],

            height: 500,
            width: 500,
        });
    });
    it('Should get the options from the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 500,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the options from the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            height: 500,
            width: 500,
            column: 'col2',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        seriesHandler.resetOptions();
        expect(seriesHandler.getOptions()).toEqual({});
    });
});
