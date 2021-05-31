import { DataHandler } from '../../../Util/DataHandler';
import { IRadialSeriesVis } from '../../../Interfaces/Visualisations/Radial/IRadialSeriesVis';
import RadialSeriesOptions from '../../ReduxStoreHandling/Plotting/Radial/RadialSeriesOptions';
import GetAnalysedData from '../../ReduxStoreHandling/AnalysedData/GetAnalysedData';
import { FieldTypes } from '../../../Interfaces/Analyse/IAnalysedFileData';

export class RadialSeriesCreateVis {
    private dataHandler = new DataHandler();
    public createVis(): IRadialSeriesVis {
        const options = new RadialSeriesOptions().get();
        if (Object.keys(options).length === 0) {
            return this.createDefaultOptions();
        }

        const fieldType = this.dataHandler.checkDataType(options.column, new GetAnalysedData().get().fields);
        return {
            data: this.getDataObjectsForField(options.column, fieldType),
            height: options.height,
            width: options.width,
        };
    }
    private getDataObjectsForField(field: string, fieldType: FieldTypes): Array<object> {
        if (fieldType === FieldTypes.BINARY) {
            const dataObjects = new GetAnalysedData().get().binaryDataObjects;
            return this.dataHandler.createAngleObjectFromColumnPercent(field, dataObjects);
        }
        if (fieldType === FieldTypes.ORDINAL) {
            const dataObjects = new GetAnalysedData().get().ordinalDataObjects;
            return this.dataHandler.createAngleObjectFromColumnPercent(field, dataObjects);
        }
        if (fieldType === FieldTypes.NOMINAL) {
            const dataObjects = new GetAnalysedData().get().nominalDataObjects;
            return this.dataHandler.createAngleObjectFromColumnPercent(field, dataObjects);
        }
        return [];
    }
    public createDefaultOptions(): IRadialSeriesVis {
        return {
            data: [],
            height: 0,
            width: 0,
        };
    }
}
