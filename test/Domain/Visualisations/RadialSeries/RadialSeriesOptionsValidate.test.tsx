import 'jsdom-global/register';
import { IRadialSeriesOptions } from '../../../../src/Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { RadialSeriesOptionsValidate } from '../../../../src/Domain/Visualisations/RadialSeries/RadialSeriesOptionsValidate';

describe('MarkSeriesOptionsValidate domain component', () => {
    it('Should return a notification when the height is bigger than the maximum value', () => {
        const options: IRadialSeriesOptions = {
            height: 801,
            width: 500,
            column: 'test',
        };
        const optionsValidate = new RadialSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 801'
        );
    });
    it('Should return a notification when the height is smaller than the minimum value', () => {
        const options: IRadialSeriesOptions = {
            height: 50,
            width: 500,
            column: 'test',
        };
        const optionsValidate = new RadialSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Height is 100, the maximum value for Height is 800. The current height is 50'
        );
    });
    it('Should return a notification when the width is bigger than the maximum value', () => {
        const options: IRadialSeriesOptions = {
            height: 500,
            width: 801,
            column: 'test',
        };
        const optionsValidate = new RadialSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 801'
        );
    });
    it('Should return a notification when the width is smaller than the minimum value', () => {
        const options: IRadialSeriesOptions = {
            height: 500,
            width: 50,
            column: 'test',
        };
        const optionsValidate = new RadialSeriesOptionsValidate(options);
        const notifications = optionsValidate.validate();
        expect(notifications.notification()).toBe(
            'The minimum value for Width is 100, the maximum value for Width is 800. The current width is 50'
        );
    });
});
