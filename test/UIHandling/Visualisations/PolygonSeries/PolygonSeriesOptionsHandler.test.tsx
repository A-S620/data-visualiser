import React from 'react';
import 'jsdom-global/register';
import { IMarkSeriesOptions } from '../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { IPolygonSeriesOptions } from '../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';
import { PolygonSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/PolygonSeries/PolygonSeriesOptionsHandler';
import CurrentPolygonVis from '../../../../src/Domain/ReduxStoreHandling/Plotting/Polygon/CurrentPolygonVis';

describe('Polygon Series Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 0,
            width: 500,
            xValue: 'test',
            yValue: 'tes',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getCurrentVisual = new CurrentPolygonVis();
        expect(getCurrentVisual.get()).toEqual({
            data: [],
            height: 500,
            width: 500,
            colour: '',
        });
    });
    it('Should get the options from the Redux store', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the mark options from the Redux store', () => {
        const testOptions: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new PolygonSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        seriesHandler.resetOptions();
        expect(seriesHandler.getOptions()).toEqual({});
    });
});
