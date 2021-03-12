import { NotificationsHandler } from '../../NotificationsHandler';
import { IHeatmapSeriesOptions } from '../../../Interfaces/Visualisations/Heatmap/IHeatmapSeriesOptions';
import { HeatmapSeriesOptionsValidate } from '../../../Domain/Visualisations/HeatmapSeries/HeatmapSeriesOptionsValidate';
import CreateHeatmapSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/CreateHeatmapSeriesOptions';
import GetHeatmapSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/GetHeatmapSeriesOptions';
import ResetHeatmapSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Heatmap/HeatmapSeriesOptions/ResetHeatmapSeriesOptions';

export class HeatmapSeriesOptionsHandler {
    private options: IHeatmapSeriesOptions;
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
            // new MarkSeriesVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        const createSeriesOptions = new CreateHeatmapSeriesOptions(this.options);
        createSeriesOptions.createHeatmapSeriesOptions();
    }
    public getOptions(): IHeatmapSeriesOptions {
        const getSeriesOptions = new GetHeatmapSeriesOptions();
        return getSeriesOptions.getHeatmapSeriesOptions();
    }
    public resetOptions() {
        const resetSeriesOptions = new ResetHeatmapSeriesOptions();
        resetSeriesOptions.resetHeatmapSeriesOptions();
    }
}
