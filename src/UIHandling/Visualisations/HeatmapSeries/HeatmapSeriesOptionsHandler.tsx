import { NotificationsHandler } from '../../NotificationsHandler';
import { IHeatmapSeriesOptions } from '../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { HeatmapSeriesOptionsValidate } from '../../../Domain/Visualisations/HeatmapSeries/HeatmapSeriesOptionsValidate';
import { HeatmapVisHandler } from './HeatmapVisHandler';
import HeatmapSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions';

export class HeatmapSeriesOptionsHandler {
    private options: IHeatmapSeriesOptions;
    private reduxHandler = new HeatmapSeriesOptions();
    constructor(options: IHeatmapSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const seriesOptions = new HeatmapSeriesOptionsValidate(this.options);
        const optionsErrors = seriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new HeatmapVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.reduxHandler.create(this.options);
    }
    public getOptions(): IHeatmapSeriesOptions {
        return this.reduxHandler.get();
    }
    public resetOptions() {
        this.reduxHandler.reset();
    }
}
