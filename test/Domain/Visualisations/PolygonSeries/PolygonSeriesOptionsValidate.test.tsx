import React from 'react';
import 'jsdom-global/register';
import { IPolygonSeriesOptions } from '../../../../src/Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';
import { PolygonSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/PolygonSeries/PolygonSeriesOptionsValidate';

describe('PolygonSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const options: IPolygonSeriesOptions = {
            colour: '',
            height: 801,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new PolygonSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const options: IPolygonSeriesOptions = {
            colour: '',
            height: 50,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new PolygonSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const options: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 801,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new PolygonSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const options: IPolygonSeriesOptions = {
            colour: '',
            height: 500,
            width: 50,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new PolygonSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 50'
        );
    });
});
