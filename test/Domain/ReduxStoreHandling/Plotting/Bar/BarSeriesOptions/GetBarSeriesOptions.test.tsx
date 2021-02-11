import 'jsdom-global/register';
import CreateBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/CreateBarSeriesOptions';
import GetBarSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions/GetBarSeriesOptions';
import { IBarSeriesOptions, yValue } from '../../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';

describe('GetBarSeriesOptions domain component', () => {
    it('Should return the correct bar series options', () => {
        const barOptions: IBarSeriesOptions = {
            barWidth: 10,
            colour: '#cd3b55',
            fill: '#cd3b55',
            height: 500,
            opacity: 1,
            stroke: '#cd3b55',
            width: 500,
            xValue: 'test',
            yValue: yValue.count,
        };
        const createBarSeriesOptions = new CreateBarSeriesOptions(barOptions);
        createBarSeriesOptions.createBarSeriesOptions();
        const getBarSeriesOptions = new GetBarSeriesOptions();

        expect(getBarSeriesOptions.getBarSeriesOptions()).toEqual(barOptions);
    });
});
