import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { CurveType, ILineSeriesOptions, LineStyle } from '../../../../src/Interfaces/plotting/Line/ILineSeriesOptions';
import { LineSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/LineSeries/LineSeriesOptionsHandler';
import GetLineSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import GetCurrentLineVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual/GetCurrentLineVisual';

describe('Line Plot Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        const notifications = lineSeriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 0,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        const notifications = lineSeriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        lineSeriesHandler.validateOptions();
        const getLineSeriesOptions = new GetLineSeriesOptions();
        expect(getLineSeriesOptions.getLineSeriesOptions()).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        lineSeriesHandler.validateOptions();

        const getCurrentVisual = new GetCurrentLineVisual();
        expect(getCurrentVisual.getCurrentLineVisual()).toEqual({
            data: [],
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        });
    });
    it('Should get the line options from the Redux store', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        lineSeriesHandler.validateOptions();
        expect(lineSeriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the line options from the Redux store', () => {
        const testOptions: ILineSeriesOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            stroke: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const lineSeriesHandler = new LineSeriesOptionsHandler(testOptions);
        lineSeriesHandler.validateOptions();
        lineSeriesHandler.resetOptions();
        expect(lineSeriesHandler.getOptions()).toStrictEqual({});
    });
});
