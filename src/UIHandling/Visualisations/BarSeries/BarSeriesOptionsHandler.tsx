import { IBarSeriesOptions } from '../../../Interfaces/plotting/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../NotificationsHandler';
import { BarSeriesOptionsValidate } from '../../../Domain/Visualisations/BarSeries/BarSeriesOptionsValidate';
import CreateBarSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import GetBarSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import ResetBarSeriesOptions from '../../../Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/ResetBarSeriesOptions';
import { BarSeriesVisHandler } from './BarSeriesVisHandler';

export class BarSeriesOptionsHandler {
    private options: IBarSeriesOptions;
    constructor(options: IBarSeriesOptions) {
        this.options = options;
    }
    public validateOptions(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const barSeriesOptions = new BarSeriesOptionsValidate(this.options);
        const optionsErrors = barSeriesOptions.validate();
        notifications.concat(optionsErrors);
        if (notifications.isEmpty()) {
            this.createOptions();
            new BarSeriesVisHandler().createBarVisual();
        }
        return notifications;
    }
    private createOptions() {
        const createBarSeriesOptions = new CreateBarSeriesOptions(this.options);
        createBarSeriesOptions.createBarSeriesOptions();
    }
    public getOptions(): IBarSeriesOptions {
        const getBarSeriesOptions = new GetBarSeriesOptions();
        return getBarSeriesOptions.getBarSeriesOptions();
    }
    public resetOptions() {
        const resetBarSeriesOptions = new ResetBarSeriesOptions();
        resetBarSeriesOptions.resetBarSeriesOptions();
    }
}
