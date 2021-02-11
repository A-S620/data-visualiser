import 'jsdom-global/register';
import { yValue } from '../../../../../../src/Interfaces/Visualisations/Bar/IBarSeriesOptions';
import { IMarkSeriesOptions } from '../../../../../../src/Interfaces/Visualisations/Mark/IMarkSeriesOptions';
import CreateMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/CreateMarkSeriesOptions';
import GetMarkSeriesOptions from '../../../../../../src/Domain/ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions/GetMarkSeriesOptions';

describe('GetMarkSeriesOptions domain component', () => {
    it('Should return the correct mark series options', () => {
        const options: IMarkSeriesOptions = {
            colour: '',
            fill: '',
            height: 0,
            opacity: 0,
            stroke: '',
            width: 0,
            xValue: '',
            yValue: 'test',
        };
        const createOptions = new CreateMarkSeriesOptions(options);
        createOptions.createMarkSeriesOptions();
        const getOptions = new GetMarkSeriesOptions();

        expect(getOptions.getMarkSeriesOptions()).toEqual(options);
    });
});