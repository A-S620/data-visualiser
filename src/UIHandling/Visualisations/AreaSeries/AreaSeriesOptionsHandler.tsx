import { NotificationsHandler } from '../../NotificationsHandler';
import { IAreaSeriesOptions } from '../../../Interfaces/Visualisations/Area/IAreaSeriesOptions';
import AreaSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Area/AreaSeriesOptions';
import { AreaSeriesOptionsValidate } from '../../../Domain/Visualisations/AreaSeries/AreaSeriesOptionsValidate';
import { AreaSeriesVisHandler } from './AreaSeriesVisHandler';

export class AreaSeriesOptionsHandler {
    private readonly options: IAreaSeriesOptions;
    private areaSeriesOptions = new AreaSeriesOptions();
    constructor(options: IAreaSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const seriesOptions = new AreaSeriesOptionsValidate(this.options);
        const optionsErrors = seriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new AreaSeriesVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.areaSeriesOptions.create(this.options);
    }
    public getOptions(): IAreaSeriesOptions {
        return this.areaSeriesOptions.get();
    }
    public resetOptions() {
        this.areaSeriesOptions.reset();
    }
}
