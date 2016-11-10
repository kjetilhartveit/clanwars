import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { Notification, NotificationType, ToastyNotification } from './';
import { IdGeneratorService } from '../../shared/id-generator.service';
import { NotificationsFactory } from './notifications.factory';

@Injectable()
export class ToastyNotificationsFactory implements NotificationsFactory {
	readonly notificationCreated = new ReplaySubject<Notification>();
	
	constructor(private idGeneratorService: IdGeneratorService) {				
	}

    /**
     * Create notification
     */
	createNotification(title: string, message: string, notificationType: NotificationType): Notification {
		let notification = new ToastyNotification(this.idGeneratorService.next(), title, message, notificationType);
		
		this.notificationCreated.next(notification);
		
		return notification;
	}
}