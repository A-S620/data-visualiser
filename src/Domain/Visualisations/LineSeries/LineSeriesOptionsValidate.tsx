import { ILineSeriesOptions } from '../../../Interfaces/plotting/Line/ILineSeriesOptions';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';

export class LineSeriesOptionsValidate {
    private readonly options: ILineSeriesOptions;
    constructor(lineSeriesOptions: ILineSeriesOptions) {
        this.options = lineSeriesOptions;
    }
    public validate(): NotificationsHandler {
        const notifications: NotificationsHandler = new NotificationsHandler();
        if (this.options.xValue === this.options.yValue) {
            notifications.addNotification('Cannot select the same fields for X Value and Y Value');
        }
        if (!this.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The minimum value for Height is 100, the maximum value for Height is 800. The current height is ${this.options.height}`
            );
        }
        if (!this.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The minimum value for Width is 100, the maximum value for Width is 800. The current width is ${this.options.width}`
            );
        }
        if (!this.opacityIsValid(this.options.opacity)) {
            notifications.addNotification(
                `The minimum value for Opacity is 0, the maximum value for Opacity is 1. The current Opacity is ${this.options.opacity}`
            );
        }
        if (!this.lineWidthIsValid(this.options.lineWidth)) {
            notifications.addNotification(
                `The minimum value for Line Width is 1, the maximum value for Line Width is 10. The current line width is ${this.options.lineWidth}`
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
    private lineWidthIsValid(width: number): boolean {
        return !(width > 10 || width < 1);
    }
}