export interface INotification {
    alert: AlertType;
    notification: string;
}
export enum AlertType {
    SUCCESS = 'success',
    FAILED = 'error',
}
