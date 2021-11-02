import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import { IRadialSeriesOptions } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';

export class RadialSeriesOptionsValidate {
    private readonly options: IRadialSeriesOptions;
    constructor(radialSeriesOptions: IRadialSeriesOptions) {
        this.options = radialSeriesOptions;
    }
    public validate(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        if (!RadialSeriesOptionsValidate.lengthIsValid(this.options.height)) {
            notifications.addNotification(
                `The minimum value for Height is 100, the maximum value for Height is 800. The current height is ${this.options.height}`
            );
        }
        if (!RadialSeriesOptionsValidate.lengthIsValid(this.options.width)) {
            notifications.addNotification(
                `The minimum value for Width is 100, the maximum value for Width is 800. The current width is ${this.options.width}`
            );
        }
        return notifications;
    }
    private static lengthIsValid(length: number): boolean {
        return !(length > 800 || length < 100);
    }
}
