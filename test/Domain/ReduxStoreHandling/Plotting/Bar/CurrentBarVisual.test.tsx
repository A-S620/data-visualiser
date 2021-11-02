import 'jsdom-global/register';
import CurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import { IBarSeriesVis } from '../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesVis';
import CurrentBarVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Bar/CurrentBarVisual';

beforeEach(() => {
    const resetCurrentVis = new CurrentLineVisual();
    resetCurrentVis.reset();
});

describe('CurrentBarVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IBarSeriesVis = {
            barWidth: 0,
            colour: '',
            data: [],
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
        };
        const currentVisHandling = new CurrentBarVisual();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
