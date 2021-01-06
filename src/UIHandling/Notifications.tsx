export class Notifications {
    private notifications: Array<string> = [];

    public addNotification(notification: string): void {
        this.notifications.push(notification);
    }

    public notification(): string {
        return this.notifications.join(', ');
    }

    public isEmpty(): boolean {
        return this.notifications.length === 0;
    }

    public getNotifications(): Array<string> {
        return this.notifications;
    }

    public concat(notifs: Notifications): void {
        this.notifications = this.notifications.concat(notifs.getNotifications());
    }
}
