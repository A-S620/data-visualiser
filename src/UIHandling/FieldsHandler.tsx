import { IField } from '../interfaces/import/IField';
import { NotificationsHandler } from './NotificationsHandler';
import GetImportedData from '../domain/ReduxStoreHandling/ImportedData/GetImportedData';

export class FieldsHandler {
    private fields: Array<IField>;
    constructor(fields: Array<IField>) {
        this.fields = fields;
    }
    public validateFields(): NotificationsHandler {
        const notifications = new NotificationsHandler();
        const getImportedColumns = new GetImportedData().getImportedData().dataFields;
        if (this.fields.length !== getImportedColumns.length) {
            notifications.addNotification('Field types have not been selected for all fields');
        }
        return notifications;
    }
}
