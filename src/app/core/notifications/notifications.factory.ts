import { OpaqueToken } from '@angular/core';

import { Notification, NotificationType } from './notification';

export interface NotificationsFactory {
	notifications: Notification[];
	
	createNotification(title: string, message: string, notificationType: NotificationType): Notification;
}

export let NotificationsFactoryToken = new OpaqueToken('notifications-factory');