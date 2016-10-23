import { OpaqueToken } from '@angular/core'; 

import { Notification, NotificationType } from './notification';

export interface NotificationsService {
	addMessage(title: string, message: string, nType: NotificationType): Notification;
}

export let NotificationsServiceToken = new OpaqueToken('notifications-service');