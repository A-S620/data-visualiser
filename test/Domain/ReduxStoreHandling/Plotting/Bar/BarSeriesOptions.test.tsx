import 'jsdom-global/register';
import BarSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/BarSeriesOptions';
import { IBarSeriesOptions, yValue } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new BarSeriesOptions();
    resetCurrentVis.reset();
});

describe('BarSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IBarSeriesOptions = {
            barWidth: 0,
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: yValue.count,
        };
        const currentVisHandling = new BarSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
