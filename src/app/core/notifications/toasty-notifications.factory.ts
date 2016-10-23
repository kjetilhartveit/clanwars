import { Injectable } from '@angular/core';
import { Subscription, Observable, ReplaySubject } from 'rxjs';

import { ToastAddedArguments } from './toast-added-arguments';

import { Notification, NotificationType } from './notification';
import { ToastyNotification } from './toasty-notification';
import { NotificationsFactory } from './notifications.factory';
import { IdGeneratorService } from './id-generator.service';
import { NotificationsConfigService } from './notifications-config.service';

@Injectable()
export class ToastyNotificationsFactory implements NotificationsFactory {
	notifications: Notification[] = [];
	notificationRemoved = new ReplaySubject<Notification>();
	subs: Subscription[] = [];
	
	constructor(private idGeneratorService: IdGeneratorService,
							private notificationsConfigService: NotificationsConfigService) {
	}
	
	createNotification(title: string, message: string, notificationType: NotificationType): Notification {
		let notification = new ToastyNotification(this.idGeneratorService.next(), title, message, notificationType);
		
		this.notifications.push(notification);
		
		return notification;
	}
	
	getEarliestNotificationWithoutDomElement(): Notification {
		let notification: Notification;
		
		this.notifications.forEach(p => {
			let toastyNotification = <ToastyNotification> p;
			
			if (toastyNotification && !toastyNotification.element) {
				notification = p; 
				
				return notification;
			}
		})
		
		return notification;
	}
	
	onToastAdded(args: ToastAddedArguments) {
		let toastyNotification = <ToastyNotification> args.notification;
		
		if (toastyNotification) {
			toastyNotification.toast = args.toast;
		}
	}
	
	onToastAddedToDom(element: Element) {
		let notification = this.getEarliestNotificationWithoutDomElement();
				
		if (notification) {
			let toastyNotification = <ToastyNotification> notification;
			
			if (toastyNotification) {
				toastyNotification.element = element;
				
				// TODO implement notification removal
//				Observable.
//				
				let timeout = setTimeout(() => {
					this.notificationRemoved.next(toastyNotification);
				}, this.notificationsConfigService.config.timeout); 
//				
//				timeout.
			}
		}
	}
}