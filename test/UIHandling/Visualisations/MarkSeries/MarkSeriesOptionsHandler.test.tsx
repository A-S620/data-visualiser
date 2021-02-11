import React from 'react';
import 'jsdom-global/register';
import { IMarkSeriesOptions } from '../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { MarkSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/MarkSeries/MarkSeriesOptionsHandler';
import GetMarkSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/GetMarkSeriesOptions';
import GetCurrentLineVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/GetCurrentLineVisual';
import GetCurrentMarkVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/CurrentMarkVisualisation/GetCurrentMarkVisual';
import { CurveType, LineStyle } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

describe('Mark Series Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'tes',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getSeries = new GetMarkSeriesOptions();
        expect(getSeries.getMarkSeriesOptions()).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getCurrentVisual = new GetCurrentMarkVisual();
        expect(getCurrentVisual.getCurrentMarkVisual()).toEqual({
            data: [],
            height: 500,
            width: 500,
            stroke: '',
            opacity: 1,
            colour: '',
            fill: '',
        });
    });
    it('Should get the mark options from the Redux store', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the mark options from the Redux store', () => {
        const testOptions: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new MarkSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        seriesHandler.resetOptions();
        expect(seriesHandler.getOptions()).toEqual({});
    });
});