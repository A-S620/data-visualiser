import { NotificationsHandler } from '../../NotificationsHandler';
import { IRadialSeriesOptions } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesOptions';
import RadialSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import { RadialSeriesOptionsValidate } from '../../../Domain/Visualisations/RadialSeries/RadialSeriesOptionsValidate';
import { RadialSeriesVisHandler } from './RadialSeriesVisHandler';

export class RadialSeriesOptionsHandler {
    private readonly options: IRadialSeriesOptions;
    private radialSeriesOptions = new RadialSeriesOptions();
    constructor(options: IRadialSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const seriesOptions = new RadialSeriesOptionsValidate(this.options);
        const optionsErrors = seriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new RadialSeriesVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.radialSeriesOptions.create(this.options);
    }
    public getOptions(): IRadialSeriesOptions {
        return this.radialSeriesOptions.get();
    }
    public resetOptions() {
        this.radialSeriesOptions.reset();
    }
}
