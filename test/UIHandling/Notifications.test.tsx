import { NotificationsHandler } from '../../src/UIHandling/NotificationsHandler';

describe('Notification Message', () => {
    it('should print out single notification', () => {
        const notifications = new NotificationsHandler();

        notifications.addNotification('error occurred');

        expect(notifications.notification()).toBe('error occurred');
    });

    it('should print out multiple notification messages', () => {
        const notifications = new NotificationsHandler();

        notifications.addNotification('this happened');
        notifications.addNotification('that happened too');

        expect(notifications.notification()).toBe('this happened, that happened too');
    });
    it('should add notifications', () => {
        const notifications1 = new NotificationsHandler();
        const notifications2 = new NotificationsHandler();

        notifications1.addNotification('notification 1');
        notifications2.addNotification('notification 2');

        notifications1.concat(notifications2);

        expect(notifications1.notification()).toBe('notification 1, notification 2');
    });
    it('should print out error message when second notes is empty', () => {
        const notifications1 = new NotificationsHandler();
        const notifications2 = new NotificationsHandler();

        notifications1.addNotification('notification 1');

        notifications1.concat(notifications2);

        expect(notifications1.notification()).toBe('notification 1');
    });
    it('should print out error message when first notes is empty', () => {
        const notifications1 = new NotificationsHandler();
        const notifications2 = new NotificationsHandler();

        notifications2.addNotification('notification 2');

        notifications1.concat(notifications2);

        expect(notifications1.notification()).toBe('notification 2');
    });
    it('should be empty when both notes are empty', () => {
        const notifications1 = new NotificationsHandler();
        const notifications2 = new NotificationsHandler();

        notifications1.concat(notifications2);

        expect(notifications1.isEmpty()).toBe(true);
    });
});
