import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { IdGeneratorService } from '../../shared/id-generator.service';
import { Notification, NotificationType } from './notification';
import { ToastyNotification } from './toasty-notification';
import { NotificationsFactory } from './notifications.factory';

@Injectable()
export class ToastyNotificationsFactory implements NotificationsFactory {
	readonly notificationCreated = new ReplaySubject<Notification>();
	
	constructor(private idGeneratorService: IdGeneratorService) {				
	}
	
	createNotification(title: string, message: string, notificationType: NotificationType): Notification {
		let notification = new ToastyNotification(this.idGeneratorService.next(), title, message, notificationType);
		
		this.notificationCreated.next(notification);
		
		return notification;
	}
}