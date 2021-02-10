import React from 'react';
import 'jsdom-global/register';
import { IBarSeriesOptions, yValue } from '../../../../src/Interfaces/plotting/Bar/IBarSeriesOptions';
import { BarSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/BarSeries/BarSeriesOptionsValidate';
import { IMarkSeriesOptions } from '../../../../src/Interfaces/plotting/Mark/IMarkSeriesOptions';
import { MarkSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/MarkSeries/MarkSeriesOptionsValidate';

describe('MarkSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 801,
            opacity: 0,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 50,
            opacity: 0,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 0,
            stroke: '',
            width: 801,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 0,
            stroke: '',
            width: 50,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 50'
        );
    });
    it('Should return a notification when the opacity is bigger than the maximum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: 2,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is 2'
        );
    });
    it('Should return a notification when the opacity is smaller than the minimum value', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 500,
            opacity: -1,
            stroke: '',
            width: 500,
            xValue: 'test',
            yValue: yValue.percent,
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is -1'
        );
    });
});
