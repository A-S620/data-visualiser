import { ILineSeriesOptions } from '../../../Interfaces/plotting/Line/ILineSeriesOptions';
import { NotificationsHandler } from '../../NotificationsHandler';
import { LineSeriesOptionsValidate } from '../../../Domain/Visualisations/LineSeries/LineSeriesOptionsValidate';
import { LineSeriesVisHandler } from '../LineSeries/LineSeriesVisHandler';
import CreateLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import GetLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import ResetLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import { IMarkSeriesOptions } from '../../../Interfaces/plotting/Mark/IMarkSeriesOptions';
import { MarkSeriesOptionsValidate } from '../../../Domain/Visualisations/MarkSeries/MarkSeriesOptionsValidate';
import CreateMarkSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/CreateMarkSeriesOptions';
import GetMarkSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/GetMarkSeriesOptions';
import ResetMarkSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/ResetMarkSeriesOptions';
import { MarkSeriesVisHandler } from './MarkSeriesVisHandler';

export class MarkSeriesOptionsHandler {
    private options: IMarkSeriesOptions;
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
        const createSeriesOptions = new CreateMarkSeriesOptions(this.options);
        createSeriesOptions.createMarkSeriesOptions();
    }
    public getOptions(): IMarkSeriesOptions {
        const getSeriesOptions = new GetMarkSeriesOptions();
        return getSeriesOptions.getMarkSeriesOptions();
    }
    public resetOptions() {
        const resetSeriesOptions = new ResetMarkSeriesOptions();
        resetSeriesOptions.resetMarkSeriesOptions();
    }
}
