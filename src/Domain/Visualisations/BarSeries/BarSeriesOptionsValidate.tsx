import { IBarSeriesOptions } from '../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import { OptionsValidate } from '../../../Util/OptionsValidate';

export class BarSeriesOptionsValidate {
    private readonly options: IBarSeriesOptions;
    constructor(barSeriesOptions: IBarSeriesOptions) {
        this.options = barSeriesOptions;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        if (!OptionsValidate.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The minimum value for Height is 100, the maximum value for Height is 800. The current height is ${this.options.height}`
            );
        }
        if (!OptionsValidate.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The minimum value for Width is 100, the maximum value for Width is 800. The current width is ${this.options.width}`
            );
        }
        if (!OptionsValidate.opacityIsValid(this.options.opacity)) {
            notifications.addNotification(
                `The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is ${this.options.opacity}`
            );
        }
        if (!OptionsValidate.barWidthIsValid(this.options.barWidth)) {
            notifications.addNotification(
                `The minimum value for bar width is 0, the maximum value for bar width is 1. The current bar width is ${this.options.barWidth}`
            );
        }
        return notifications;
    }
}
