import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';
import { IRadialSeriesOptions } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import { OptionsValidate } from '../../../Util/OptionsValidate';
export class RadialSeriesOptionsValidate {
    private readonly options: IRadialSeriesOptions;
    constructor(radialSeriesOptions: IRadialSeriesOptions) {
        this.options = radialSeriesOptions;
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
        return notifications;
    }
}
