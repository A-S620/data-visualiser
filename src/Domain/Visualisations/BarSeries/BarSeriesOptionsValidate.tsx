import { IBarSeriesOptions } from '../../../Interfaces/plotting/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';

export class BarSeriesOptionsValidate {
    private readonly options: IBarSeriesOptions;
    constructor(barSeriesOptions: IBarSeriesOptions) {
        this.options = barSeriesOptions;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        if (!this.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The maximum value for Height is 800, the minimum value for Height is 100. The current height is ${this.options.height}`
            );
        }
        if (!this.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The maximum value for Width is 800, the minimum value for Width is 100. The current width is ${this.options.width}`
            );
        }
        if (!this.opacityIsValid(this.options.opacity)) {
            notifications.addNotification(
                `The minimum value for Opacity is 0, the minimum value for Opacity is 1. The current Opacity is ${this.options.opacity}`
            );
        }
        return notifications;
    }
    private lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
    private opacityIsValid(opacity: number): boolean {
        return !(opacity > 1 || opacity < 0);
    }
}
