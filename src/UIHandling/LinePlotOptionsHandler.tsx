import { ILinePlotOptions } from '../Interfaces/plotting/ILinePlotOptions';
import { NotificationsHandler } from './NotificationsHandler';
import { LineSeriesOptionsValidate } from '../Domain/LineSeriesVis/LineSeriesOptionsValidate';
import GetLinePlotOptions from '../Domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import CreateLinePlotOptions from '../Domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import ResetLinePlotOptions from '../Domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';
import { LineSeriesVisHandler } from './LineSeriesVisHandler';

export class LinePlotOptionsHandler {
    private options: ILinePlotOptions;
    constructor(options: ILinePlotOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const linePlotOptions = new LineSeriesOptionsValidate(this.options);
        const optionsErrors = linePlotOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new LineSeriesVisHandler().createLineVisual();
        }
        return notifications;
    }
    private createOptions() {
        const createLienPlotOptions = new CreateLinePlotOptions(this.options);
        createLienPlotOptions.createLinePlotOptions();
    }
    public getOptions(): ILinePlotOptions {
        const getLinePlotOptions = new GetLinePlotOptions();
        return getLinePlotOptions.getLinePlotOptions();
    }
    public resetOptions() {
        const resetLinePlotOptions = new ResetLinePlotOptions();
        resetLinePlotOptions.resetLinePlotOptions();
    }
}
