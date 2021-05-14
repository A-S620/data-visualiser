import { IBarSeriesOptions } from '../../../Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../NotificationsHandler';
import { BarSeriesOptionsValidate } from '../../../Domain/Visualisations/BarSeries/BarSeriesOptionsValidate';
import { BarSeriesVisHandler } from './BarSeriesVisHandler';
import BarSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions';

export class BarSeriesOptionsHandler {
    private options: IBarSeriesOptions;
    private barSeriesOptions = new BarSeriesOptions();
    constructor(options: IBarSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const barSeriesOptions = new BarSeriesOptionsValidate(this.options);
        const optionsErrors = barSeriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new BarSeriesVisHandler().createBarVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.barSeriesOptions.create(this.options);
    }
    public getOptions(): IBarSeriesOptions {
        return this.barSeriesOptions.get();
    }
    public resetOptions() {
        this.barSeriesOptions.reset();
    }
}
