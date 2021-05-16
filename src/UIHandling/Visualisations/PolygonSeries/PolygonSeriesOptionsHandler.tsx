import { NotificationsHandler } from '../../NotificationsHandler';
import { IPolygonSeriesOptions } from '../../../Interfaces/Visualisations/Polygon/IPolygonSeriesOptions';
import PolygonSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Polygon/PolygonSeriesOptions';
import { PolygonSeriesOptionsValidate } from '../../../Domain/Visualisations/PolygonSeries/PolygonSeriesOptionsValidate';
import { PolygonSeriesVisHandler } from './PolygonSeriesVisHandler';

export class PolygonSeriesOptionsHandler {
    private readonly options: IPolygonSeriesOptions;
    private polygonSeriesOptions = new PolygonSeriesOptions();
    constructor(options: IPolygonSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const seriesOptions = new PolygonSeriesOptionsValidate(this.options);
        const optionsErrors = seriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new PolygonSeriesVisHandler().createVisual();
        }
        return notifications;
    }
    private createOptions() {
        this.polygonSeriesOptions.create(this.options);
    }
    public getOptions(): IPolygonSeriesOptions {
        return this.polygonSeriesOptions.get();
    }
    public resetOptions() {
        this.polygonSeriesOptions.reset();
    }
}
