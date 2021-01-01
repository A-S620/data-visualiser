export interface INotification {
    alert: AlertType | undefined;
    notification: string;
}
export enum AlertType {
    SUCCESS = 'success',
    FAILED = 'error',
}
