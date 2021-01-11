import { ILinePlotOptions } from '../interfaces/plotting/ILinePlotOptions';
import { NotificationsHandler } from './NotificationsHandler';
import { LineSeriesOptionsValidate } from '../domain/LineSeriesVis/LineSeriesOptionsValidate';
import GetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import CreateLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import ResetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';

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
