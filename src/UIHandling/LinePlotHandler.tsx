import { ILinePlotOptions } from '../interfaces/plotting/ILinePlotOptions';
import { Notifications } from './Notifications';
import { LinePlotOptionsValidate } from '../domain/LinePlotOptions/LinePlotOptionsValidate';

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
        return notifications;
    }
}
