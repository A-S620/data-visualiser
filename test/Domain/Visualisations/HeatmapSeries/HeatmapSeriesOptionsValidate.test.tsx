import React from 'react';
import 'jsdom-global/register';
import { IHeatmapSeriesOptions } from '../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { HeatmapSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/HeatmapSeries/HeatmapSeriesOptionsValidate';

describe('HeatmapSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the xValue is the same as the yValue', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe('Cannot select the same fields for X Value and Y Value');
    });
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 801,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 50,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 801,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 50,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 50'
        );
    });
    it('Should return a notification when the opacity is bigger than the maximum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 2,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is 2'
        );
    });
    it('Should return a notification when the opacity is smaller than the minimum value', () => {
        const options: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test2',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: -1,
        };
        const optionsValidate = new HeatmapSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is -1'
        );
    });
});
