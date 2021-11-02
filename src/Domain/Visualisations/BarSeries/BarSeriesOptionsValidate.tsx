import { IBarSeriesOptions } from '../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';

export class BarSeriesOptionsValidate {
    private readonly options: IBarSeriesOptions;
    constructor(barSeriesOptions: IBarSeriesOptions) {
        this.options = barSeriesOptions;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        if (!BarSeriesOptionsValidate.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The minimum value for Height is 100, the maximum value for Height is 800. The current height is ${this.options.height}`
            );
        }
        if (!BarSeriesOptionsValidate.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The minimum value for Width is 100, the maximum value for Width is 800. The current width is ${this.options.width}`
            );
        }
        if (!BarSeriesOptionsValidate.opacityOrBarWidthIsValid(this.options.opacity)) {
            notifications.addNotification(
                `The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is ${this.options.opacity}`
            );
        }
        if (!BarSeriesOptionsValidate.opacityOrBarWidthIsValid(this.options.barWidth)) {
            notifications.addNotification(
                `The minimum value for bar width is 0, the maximum value for bar width is 1. The current bar width is ${this.options.barWidth}`
            );
        }
        return notifications;
    }
    private static lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
    private static opacityOrBarWidthIsValid(opacity: number): boolean {
        return !(opacity > 1 || opacity < 0);
    }
}
