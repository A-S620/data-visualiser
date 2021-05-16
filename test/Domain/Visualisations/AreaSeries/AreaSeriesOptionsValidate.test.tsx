import React from 'react';
import 'jsdom-global/register';
import { IAreaSeriesOptions } from '../../../../src/Interfaces/Visualisations/Area/IAreaSeriesOptions';
import { AreaSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/AreaSeries/AreaSeriesOptionsValidate';
import { CurveType } from '../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';
import { IMarkSeriesOptions } from '../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { MarkSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/MarkSeries/MarkSeriesOptionsValidate';

describe('AreaSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const options: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            height: 801,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new AreaSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const options: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            height: 50,
            width: 500,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new AreaSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const options: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            height: 500,
            width: 801,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new AreaSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const options: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            height: 500,
            width: 50,
            xValue: 'test',
            yValue: 'test',
        };
        const optionsValidate = new AreaSeriesOptionsValidate(options);
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
            yValue: 'test',
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
            yValue: 'test',
        };
        const optionsValidate = new MarkSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is -1'
        );
    });
});
