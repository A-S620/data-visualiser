import 'jsdom-global/register';
import CurrentLineVisual from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Line/CurrentLineVisual';
import { ILineSeriesVis } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesVis';
import { CurveType, LineStyle } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new CurrentLineVisual();
    resetCurrentVis.reset();
});

describe('CurrentLineVisual domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: ILineSeriesVis = {
            curveType: CurveType.curveLinear,
            data: [],
            height: 0,
            lineStyle: LineStyle.DASHED,
            lineWidth: 0,
            opacity: 0,
            stroke: '',
            width: 0,
        };
        const currentVisHandling = new CurrentLineVisual();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
