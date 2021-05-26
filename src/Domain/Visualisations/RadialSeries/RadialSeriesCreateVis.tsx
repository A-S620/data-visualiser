import { DataHandler } from '../../../Util/DataHandler';
import { IRadialSeriesVis } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';
import RadialSeriesOptions from '../../ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import ImportedData from '../../ReduxStoreHandling/ImportedData/ImportedData';

export class RadialSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IRadialSeriesVis {
        const options = new RadialSeriesOptions().get();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        const importedFileData = new ImportedData().get().dataObjects;
        return {
            data: [
                { angle: 1, radius: 10 },
                { angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20 },
                { angle: 5, radius: 5, label: 'Alt Label' },
                { angle: 3, radius: 14 },
                { angle: 5, radius: 12, subLabel: 'Sub Label only' },
            ],
            height: options.height,
            width: options.width,
            colour: options.colour,
        };
    }
    public createDefaultOptions(): IRadialSeriesVis {
        return {
            data: [],
            height: 0,
            width: 0,
            colour: '',
        };
    }
}
