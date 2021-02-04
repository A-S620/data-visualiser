import { IBarSeriesOptions } from '../../../Interfaces/plotting/Bar/IBarSeriesOptions';
import { NotificationsHandler } from '../../../UIHandling/NotificationsHandler';

export class BarSeriesOptionsValidate {
    private readonly options: IBarSeriesOptions;
    constructor(barSeriesOptions: IBarSeriesOptions) {
        this.options = barSeriesOptions;
    }
}
