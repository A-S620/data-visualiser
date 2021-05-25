// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import 'jsdom-global/register';
import { IRadialSeriesOptions } from '../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { RadialSeriesOptionsHandler } from '../../../../src/UIHandling/Visualisations/Radial/RadialSeriesOptionsHandler';
import CurrentRadialVisual from '../../../../src/Domain/ReduxStoreHandling/Plotting/Radial/CurrentRadialVisual';

describe('Radial Series Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 0,
            width: 500,
            xValue: 'test',
            yValue: 'tes',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        const notifications = seriesHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getSeries = new CurrentRadialVisual().get();
        expect(getSeries).toBe(testOptions);
    });
    it('Should create the current visualisation in the Redux store if the options are valid', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        const getCurrentVisual = new CurrentRadialVisual();
        expect(getCurrentVisual.get()).toEqual({
            data: [],
            height: 500,
            width: 500,
            opacity: 1,
            colour: '',
        });
    });
    it('Should get the options from the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        expect(seriesHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the options from the Redux store', () => {
        const testOptions: IRadialSeriesOptions = {
            colour: '',
            height: 500,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const seriesHandler = new RadialSeriesOptionsHandler(testOptions);
        seriesHandler.validateOptions();
        seriesHandler.resetOptions();
        expect(seriesHandler.getOptions()).toEqual({});
    });
});
