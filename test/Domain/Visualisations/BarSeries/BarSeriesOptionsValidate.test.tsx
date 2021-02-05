import React from 'react';
import 'jsdom-global/register';
import { IBarSeriesOptions } from '../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { BarSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/BarSeries/BarSeriesOptionsValidate';

describe('BarSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 801,
            opacity: 0,
            stroke: 'cd3b54',
            width: 800,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Height is 800, the minimum value for Height is 100. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 50,
            opacity: 0,
            stroke: 'cd3b54',
            width: 800,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Height is 800, the minimum value for Height is 100. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 801,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Width is 800, the minimum value for Width is 100. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 0,
            stroke: 'cd3b54',
            width: 50,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The maximum value for Width is 800, the minimum value for Width is 100. The current width is 50'
        );
    });

    it('Should return a notification when the opacity is bigger than the maximum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: 2,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the minimum value for Opacity is 1. The current Opacity is 2'
        );
    });
    it('Should return a notification when the opacity is smaller than the minimum value', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: 'cd3b54',
            fill: 'cd3b54',
            height: 100,
            opacity: -1,
            stroke: 'cd3b54',
            width: 100,
            xValue: 'test',
            yValue: 'count',
        };
        const barOptionsValidate = new BarSeriesOptionsValidate(barOptions);
        const notifications = barOptionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the minimum value for Opacity is 1. The current Opacity is -1'
        );
    });
});
