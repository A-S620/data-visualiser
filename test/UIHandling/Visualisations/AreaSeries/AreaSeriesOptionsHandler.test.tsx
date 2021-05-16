import React from 'react';
import 'jsdom-global/register';
import { IMarkSeriesOptions } from '../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { IAreaSeriesOptions } from '../../../../src/Interfaces/Visualisations/Area/IAreaSeriesOptions';
import { AreaSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/AreaSeries/AreaSeriesOptionsHandler';
import CurrentAreaVis from '../../../../src/Domain/ReduxStoreHandling/Plotting/Area/CurrentAreaVis';
import { CurveType } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

describe('Polygon Series Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 0,
            width: 500,
            xValue: 'test',
            yValue: 'tes',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getCurrentVisual = new CurrentAreaVis();
        expect(getCurrentVisual.get()).toEqual({
            data: [],
            height: 500,
            width: 500,
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
        });
    });
    it('Should get the options from the Redux store', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the mark options from the Redux store', () => {
        const testOptions: IAreaSeriesOptions = {
            stroke: '#000000',
            opacity: 1,
            curveType: CurveType.curveLinear,
            fill: '#000000',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new AreaSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        seriesHandler.resetOptions();
        expect(seriesHandler.getOptions()).toEqual({});
    });
});
