import { ILinePlotOptions } from '../interfaces/plotting/ILinePlotOptions';
import { Notifications } from './Notifications';
import { LinePlotOptionsValidate } from '../domain/LinePlotOptions/LinePlotOptionsValidate';
import GetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/GetLinePlotOptions';
import CreateLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/CreateLinePlotOptions';
import ResetLinePlotOptions from '../domain/ReduxStoreHandling/LinePlotOptions/ResetLinePlotOptions';

export class LinePlotHandler {
    private options: ILinePlotOptions;
    constructor(options: ILinePlotOptions) {
        this.options = options;
    }
    public validateOptions(): Notifications {
        const notifications = new Notifications();
        const linePlotOptions = new LinePlotOptionsValidate(this.options);
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
