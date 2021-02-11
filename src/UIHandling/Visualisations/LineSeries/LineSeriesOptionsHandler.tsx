import { ILineSeriesOptions } from '../../../Interfaces/Visualisations/Line/ILineSeriesOptions';
import { NotificationsHandler } from '../../NotificationsHandler';
import { LineSeriesOptionsValidate } from '../../../Domain/Visualisations/LineSeries/LineSeriesOptionsValidate';
import GetLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/GetLineSeriesOptions';
import CreateLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/CreateLineSeriesOptions';
import ResetLineSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Line/LineSeriesOptions/ResetLineSeriesOptions';
import { LineSeriesVisHandler } from './LineSeriesVisHandler';

export class LineSeriesOptionsHandler {
    private options: ILineSeriesOptions;
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
        const createLineSeriesOptions = new CreateLineSeriesOptions(this.options);
        createLineSeriesOptions.createLineSeriesOptions();
    }
    public getOptions(): ILineSeriesOptions {
        const getLineSeriesOptions = new GetLineSeriesOptions();
        return getLineSeriesOptions.getLineSeriesOptions();
    }
    public resetOptions() {
        const resetLineSeriesOptions = new ResetLineSeriesOptions();
        resetLineSeriesOptions.resetLineSeriesOptions();
    }
}
