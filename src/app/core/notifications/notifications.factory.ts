import { Notification, NotificationType } from './notification';

export interface NotificationsFactory {
	createNotification(title: string, message: string, notificationType: NotificationType): Notification;
}