import React from 'react';
import 'jsdom-global/register';
import { CurveType, ILinePlotOptions, LineStyle } from '../../../src/Interfaces/plotting/ILinePlotOptions';
import { LineSeriesOptionsValidate } from '../../../src/Domain/LineSeriesVis/LineSeriesOptionsValidate';

describe('LineSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the xValue is the same as the yValue', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test',
            height: 500,
            width: 500,
            colour: '#cd3b55',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe('Cannot select the same fields for X Value and Y Value');
    });
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 801,
            width: 500,
            colour: '#cd3b54',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Height is 800, the minimum value for Height is 100. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 50,
            width: 500,
            colour: '#cd3b54',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Height is 800, the minimum value for Height is 100. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 801,
            colour: '#cd3b54',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Width is 800, the minimum value for Width is 100. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 50,
            colour: '#cd3b54',
            opacity: 0,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Width is 800, the minimum value for Width is 100. The current width is 50'
        );
    });
    it('Should return a notification when the opacity is bigger than the maximum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 800,
            colour: '#000000',
            opacity: 2,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Opacity is 0, the minimum value for Opacity is 1. The current Opacity is 2'
        );
    });
    it('Should return a notification when the opacity is smaller than the minimum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 800,
            colour: '#000000',
            opacity: -1,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Opacity is 0, the minimum value for Opacity is 1. The current Opacity is -1'
        );
    });
    it('Should return a notification when the line width is smaller than the minimum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 800,
            colour: '#000000',
            opacity: 1,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 0,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Line Width is 10, the minimum value for Line Width is 1. The current line width is 0'
        );
    });
    it('Should return a notification when the line width is bigger than the maximum value', () => {
        const lineOptions: ILinePlotOptions = {
            xValue: 'test',
            yValue: 'test2',
            height: 800,
            width: 800,
            colour: '#000000',
            opacity: 1,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 11,
        };
        const lineOptionsValidate = new LineSeriesOptionsValidate(lineOptions);
        const notifications = lineOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Line Width is 10, the minimum value for Line Width is 1. The current line width is 11'
        );
    });
});
