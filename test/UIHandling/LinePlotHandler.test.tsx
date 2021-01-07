import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import 'jsdom-global/register';
import { CurveType, ILinePlotOptions, LineStyle } from '../../src/interfaces/plotting/ILinePlotOptions';
import { LinePlotHandler } from '../../src/UIHandling/LinePlotHandler';
import GetLinePlotOptions from '../../src/domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';

describe('Line Plot Handler UIHandling Component', () => {
    it('Should not give an error if all options are valid', () => {
        const testOptions: ILinePlotOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const linePlotHandler = new LinePlotHandler(testOptions);
        const notifications = linePlotHandler.validateOptions();
        expect(notifications.notification()).toBe('');
    });
    it('Should give an error if one of the options are invalid', () => {
        const testOptions: ILinePlotOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 0,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const linePlotHandler = new LinePlotHandler(testOptions);
        const notifications = linePlotHandler.validateOptions();
        expect(notifications.notification()).toBe(
            'The maximum value for Height is 800, the minimum value for Height is 100. The current height is 0'
        );
    });
    it('Should save valid options in the Redux store', () => {
        const testOptions: ILinePlotOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const linePlotHandler = new LinePlotHandler(testOptions);
        linePlotHandler.validateOptions();
        const getLinePlotOptions = new GetLinePlotOptions();
        expect(getLinePlotOptions.getLinePlotOptions()).toBe(testOptions);
    });
    it('Should get the line options from the Redux store', () => {
        const testOptions: ILinePlotOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const linePlotHandler = new LinePlotHandler(testOptions);
        linePlotHandler.validateOptions();
        expect(linePlotHandler.getOptions()).toBe(testOptions);
    });
    it('Should reset the line options from the Redux store', () => {
        const testOptions: ILinePlotOptions = {
            xValue: 'Test',
            yValue: 'Test2',
            height: 500,
            width: 500,
            colour: '000000',
            opacity: 0.5,
            curveType: CurveType.curveMonotoneY,
            lineStyle: LineStyle.SOLID,
            lineWidth: 2,
        };

        const linePlotHandler = new LinePlotHandler(testOptions);
        linePlotHandler.validateOptions();
        linePlotHandler.resetOptions();
        expect(linePlotHandler.getOptions()).toStrictEqual({});
    });
});
