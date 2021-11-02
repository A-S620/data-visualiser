import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import { IAreaSeriesOptions } from '../../../Interfaces/Visualisations/Area/IAreaSeriesOptions';

export class AreaSeriesOptionsValidate {
    private readonly options: IAreaSeriesOptions;
    constructor(options: IAreaSeriesOptions) {
        this.options = options;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        if (!AreaSeriesOptionsValidate.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The minimum value for Height is 100, the maximum value for Height is 800. The current height is ${this.options.height}`
            );
        }
        if (!AreaSeriesOptionsValidate.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The minimum value for Width is 100, the maximum value for Width is 800. The current width is ${this.options.width}`
            );
        }
        if (!AreaSeriesOptionsValidate.opacityIsValid(this.options.opacity)) {
            notifications.addNotification(
                `The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is ${this.options.opacity}`
            );
        }
        return notifications;
    }
    private static lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
    private static opacityIsValid(opacity: number): boolean {
        return !(opacity > 1 || opacity < 0);
    }
}
