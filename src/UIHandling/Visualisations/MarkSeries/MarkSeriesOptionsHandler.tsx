import { NotificationsHandler } from '../../NotificationsHandler';
import { IMarkSeriesOptions } from '../../../Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import { MarkSeriesOptionsValidate } from '../../../Domain/Visualisations/MarkSeries/MarkSeriesOptionsValidate';
import { MarkSeriesVisHandler } from './MarkSeriesVisHandler';
import MarkSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';

export class MarkSeriesOptionsHandler {
    private readonly options: IMarkSeriesOptions;
    private markSeriesOptions = new MarkSeriesOptions();
    constructor(options: IMarkSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const seriesOptions = new MarkSeriesOptionsValidate(this.options);
        const optionsErrors = seriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new MarkSeriesVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.markSeriesOptions.create(this.options);
    }
    public getOptions(): IMarkSeriesOptions {
        return this.markSeriesOptions.get();
    }
    public resetOptions() {
        this.markSeriesOptions.reset();
    }
}
