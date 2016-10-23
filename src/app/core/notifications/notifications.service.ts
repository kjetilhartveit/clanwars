import { Notification, NotificationType } from './notification';

export interface NotificationsService {
	addMessage(title: string, message: string, nType: NotificationType): Notification;
}