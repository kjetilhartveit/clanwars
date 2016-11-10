import { Notification, NotificationType } from './';

export interface NotificationsFactory {
	createNotification(title: string, message: string, notificationType: NotificationType): Notification;
}