import 'jsdom-global/register';
import AreaSeriesOptions from '../../../../../src/Domain/ReduxStoreHandling/Plotting/Area/AreaSeriesOptions';
import { IAreaSeriesOptions } from '../../../../../src/Interfaces/Visualisations/Area/IAreaSeriesOptions';
import { CurveType } from '../../../../../src/Interfaces/Visualisations/Line/ILineSeriesOptions';

beforeEach(() => {
    const resetCurrentVis = new AreaSeriesOptions();
    resetCurrentVis.reset();
});

describe('AreaSeriesOptions domain component', () => {
    it('Should do the correct methods to the redux store', () => {
        const currentVisual: IAreaSeriesOptions = {
            curveType: CurveType.curveLinear,
            opacity: 0,
            stroke: '',
            fill: '',
            height: 0,
            width: 0,
            xValue: '',
            yValue: '',
        };
        const currentVisHandling = new AreaSeriesOptions();
        currentVisHandling.create(currentVisual);
        expect(currentVisHandling.get()).toEqual(currentVisual);
        currentVisHandling.reset();
        expect(currentVisHandling.get()).toEqual({});
    });
});
