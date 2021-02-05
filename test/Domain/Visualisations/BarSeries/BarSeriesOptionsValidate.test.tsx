import React from 'react';
import 'jsdom-global/register';
import { IBarSeriesOptions, yValue } from '../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { BarSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/BarSeries/BarSeriesOptionsValidate';

describe('BarSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 801,
            opacity: 0,
            stroke: 'cd3b54',
            width: 800,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 50,
            opacity: 0,
            stroke: 'cd3b54',
            width: 800,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 801,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 50,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 50'
        );
    });

    it('Should return a notification when the opacity is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 2,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is 2'
        );
    });
    it('Should return a notification when the opacity is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 0,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: -1,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is -1'
        );
    });
    it('Should return a notification when the bar width is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 2,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for bar width is 0, the maximum value for bar width is 1. The current bar width is 2'
        );
    });
    it('Should return a notification when the bar width is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: -1,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: yValue.count,
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for bar width is 0, the maximum value for bar width is 1. The current bar width is -1'
        );
    });
});
