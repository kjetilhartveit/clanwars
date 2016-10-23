import { Injectable } from '@angular/core';
import { ToastData } from 'ng2-toasty';

import { Notification, NotificationType } from './notification';
import { ToastyNotification } from './toasty-notification';
import { NotificationsFactory } from './notifications.factory';
import { IdGeneratorService } from './id-generator.service';

@Injectable()
export class ToastyNotificationsFactory implements NotificationsFactory {
	notifications: Notification[] = [];
	
	constructor(private idGeneratorService: IdGeneratorService) {
	}
	
	createNotification(title: string, message: string, notificationType: NotificationType): Notification {
		let notification = new ToastyNotification(this.idGeneratorService.next(), title, message, notificationType);
		
		return notification;
	}
	
	onToastAdded(toast: ToastData) {
		
	}
}