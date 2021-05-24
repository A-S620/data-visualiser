import { DataHandler } from '../../../Util/DataHandler';
import { IMarkSeriesVis } from '../../../Interfaces/Visualisations/Mark/IMarkSeriesVis';
import MarkSeriesOptions from '../../ReduxStoreHandling/Plotting/Mark/MarkSeriesOptions';
import { IRadialSeriesVis } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';
import RadialSeriesOptions from '../../ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';

export class RadialSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IRadialSeriesVis {
        const options = new RadialSeriesOptions().get();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        return {
            data: [{ angle: 1 }, { angle: 5 }, { angle: 2 }],
            height: options.height,
            width: options.width,
            colour: options.colour,
        };
    }
    private createDefaultOptions(): IRadialSeriesVis {
        const { intervalFields } = this.dataHandler.getAnalysedData();
        return {
            data: [{ angle: 1 }, { angle: 5 }, { angle: 2 }],
            height: 800,
            width: 800,
            colour: 'black',
        };
    }
}
