import { Notification, NotificationType } from './';

export interface NotificationsService {
	addMessage(title: string, message: string, nType: NotificationType): Notification;
}