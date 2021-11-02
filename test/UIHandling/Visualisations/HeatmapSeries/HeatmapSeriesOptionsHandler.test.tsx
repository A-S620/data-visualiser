import 'jsdom-global/register';
import { IHeatmapSeriesOptions } from '../../../../src/Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { HeatmapSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/HeatmapSeries/HeatmapSeriesOptionsValidate';
import { HeatmapSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/HeatmapSeries/HeatmapSeriesOptionsHandler';
import HeatmapSeriesOptions from '../../../../src/Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions';

describe('HeatmapSeriesOptionsValidate UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test1',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };

        const optionsSeriesHandlers = new HeatmapSeriesOptionsValidate(testOptions);
        const notifications = optionsSeriesHandlers.validate();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test1',
            height: 0,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };

        const optionsSeriesHandlers = new HeatmapSeriesOptionsValidate(testOptions);
        const notifications = optionsSeriesHandlers.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test1',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };
        const optionsSeriesHandlers = new HeatmapSeriesOptionsHandler(testOptions);
        optionsSeriesHandlers.validateOptions();
        const getSeriesOptions = new HeatmapSeriesOptions();
        expect(getSeriesOptions.get()).toBe(testOptions);
    });
    it('Should get the heatmap options from the Redux store', () => {
        const testOptions: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test1',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };

        const optionsSeriesHandlers = new HeatmapSeriesOptionsHandler(testOptions);
        optionsSeriesHandlers.validateOptions();
        expect(optionsSeriesHandlers.getOptions()).toBe(testOptions);
    });
    it('Should reset the heatmap options from the Redux store', () => {
        const testOptions: IHeatmapSeriesOptions = {
            colour: '#cd3b55',
            colourRange: {
                colour1: 'red',
                colour2: 'green',
            },
            fill: '#cd3b55',
            xValue: 'test',
            yValue: 'test1',
            height: 500,
            width: 500,
            stroke: '#cd3b55',
            opacity: 0,
        };

        const optionsSeriesHandlers = new HeatmapSeriesOptionsHandler(testOptions);
        optionsSeriesHandlers.validateOptions();
        optionsSeriesHandlers.resetOptions();
        const getSeriesOptions = new HeatmapSeriesOptions();
        expect(getSeriesOptions.get()).toEqual({});
    });
});
