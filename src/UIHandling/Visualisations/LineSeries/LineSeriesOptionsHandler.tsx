import { ILineSeriesOptions } from '../../../Interfaces/Visualisations/Line/ILineSeriesOptions';
import { NotificationsHandler } from '../../NotificationsHandler';
import { LineSeriesOptionsValidate } from '../../../Domain/Visualisations/LineSeries/LineSeriesOptionsValidate';
import { LineSeriesVisHandler } from './LineSeriesVisHandler';
import LineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions';

export class LineSeriesOptionsHandler {
    private readonly options: ILineSeriesOptions;
    private lineSeriesOptions = new LineSeriesOptions();
    constructor(options: ILineSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const lineSeriesOptions = new LineSeriesOptionsValidate(this.options);
        const optionsErrors = lineSeriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new LineSeriesVisHandler().createLineVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.lineSeriesOptions.create(this.options);
    }
    public getOptions(): ILineSeriesOptions {
        return this.lineSeriesOptions.get();
    }
    public resetOptions() {
        this.lineSeriesOptions.reset();
    }
}
