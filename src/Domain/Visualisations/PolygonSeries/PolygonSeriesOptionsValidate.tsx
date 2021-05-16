import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import { IPolygonSeriesOptions } from '../../../Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';

export class PolygonSeriesOptionsValidate {
    private readonly options: IPolygonSeriesOptions;
    constructor(options: IPolygonSeriesOptions) {
        this.options = options;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
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
        return notifications;
    }
    private lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
}
