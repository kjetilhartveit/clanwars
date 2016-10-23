import { Notification, NotificationType } from './notification';

export interface NotificationsFactory {
	notifications: Notification[];
	
	createNotification(title: string, message: string, notificationType: NotificationType): Notification;
}