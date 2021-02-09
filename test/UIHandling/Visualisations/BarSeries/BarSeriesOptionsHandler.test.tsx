import React from 'react';
import 'jsdom-global/register';
import { IBarSeriesOptions, yValue } from '../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { BarSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/BarSeries/BarSeriesOptionsHandler';
import { IImportedFileData } from '../../../../src/Interfaces/import/IImportedFileData';
import CreateImportedData from '../../../../src/Domain/ReduxStoreHandling/ImportedData/CreateImportedData';
import { AnalyseFileData } from '../../../../src/Domain/AnalyseFile/AnalyseFileData';
import { FieldTypes } from '../../../../src/Interfaces/Analyse/IAnalysedFileData';
import CreateLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import { CurveType, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';
import ResetLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import CreateBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import ResetBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import GetBarSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import GetCurrentBarVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisualisation/GetCurrentBarVisual';

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
    const createImportedData = new CreateImportedData(testData);
    createImportedData.createDataFields();
    createImportedData.createDataAsObjects();
    const analyseData = new AnalyseFileData([
        { field: 'col1', fieldType: FieldTypes.NOMINAL },
        { field: 'col2', fieldType: FieldTypes.NOMINAL },
        { field: 'col3', fieldType: FieldTypes.IGNORE },
    ]);
    analyseData.validateAnalysedData();
});
afterAll(() => {
    new ResetBarSeriesOptions().resetBarSeriesOptions();
});
describe('BarSeriesOptionsHandler UI Handling component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        const notifications = barSeriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 0,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        const notifications = barSeriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        barSeriesHandler.validateOptions();

        const getBarSeriesOptions = new GetBarSeriesOptions();
        expect(getBarSeriesOptions.getBarSeriesOptions()).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        barSeriesHandler.validateOptions();

        const getCurrentVisual = new GetCurrentBarVisual();
        expect(getCurrentVisual.getCurrentBarVisual()).toEqual({
            data: [
                { x: 'hot', y: 1 },
                { x: 'cold', y: 1 },
                { x: 'warm', y: 1 },
            ],
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
        });
    });
    it('Should get the bar options from the Redux store', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        barSeriesHandler.validateOptions();
        expect(barSeriesHandler.getOptions()).toEqual(testOptions);
    });
    it('Should reset the bar options from the Redux store', () => {
        const testOptions: IBarSeriesOptions = {
            barWidth: 1,
            colour: '000000',
            fill: '000000',
            height: 500,
            opacity: 1,
            stroke: '000000',
            width: 500,
            xValue: 'col1',
            yValue: yValue.count,
        };
        const barSeriesHandler = new BarSeriesOptionsHandler(testOptions);
        barSeriesHandler.validateOptions();
        barSeriesHandler.resetOptions();
        expect(barSeriesHandler.getOptions()).toEqual({});
    });
});