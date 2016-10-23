import { Inject, Injectable, OnDestroy } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { Subscription, ReplaySubject } from 'rxjs';

import { Notification, NotificationType } from './notification';
import { ToastyNotification } from './toasty-notification';
import { ToastyNotificationsConfig } from './toasty-notifications-config';
import { ToastAddedArguments } from './toast-added-arguments';
import { NotificationsConfigService } from './notifications-config.service';
import { NotificationsService } from './notifications.service';
import { NotificationsFactory } from './notifications.factory';
import { NotificationsFactoryToken } from './notifications.factory.token';
import { ToastyNotificationsFactory } from './toasty-notifications.factory';

@Injectable()
export class ToastyNotificationsService implements NotificationsService, OnDestroy {
	toastAdded = new ReplaySubject<ToastAddedArguments>();
	notificationRemoved = new ReplaySubject<Notification>();
	subs: Subscription[] = []; 

  constructor(private notificationsConfigService: NotificationsConfigService,
							private toastyService: ToastyService,
							@Inject(NotificationsFactoryToken) private notificationsFactory: NotificationsFactory) { 
	
		let toastyNotificationsFactory = <ToastyNotificationsFactory> this.notificationsFactory;
				
		this.subs.push(
			this.toastAdded.subscribe((args) => toastyNotificationsFactory.onToastAdded(args)),
			toastyNotificationsFactory.notificationRemoved.subscribe((notification) => { 
				// Chain toastRemoved event from factory to this
				// TODO this is probably causing bugs
				this.notificationRemoved.next(notification); 
			}),
			this.notificationRemoved.subscribe((notification) => { this.onNotificationRemoved(notification) })
		);						
	}
	
	addMessage(title: string, message: string, nType: NotificationType): Notification {
		let toastyNotificationFactory = <ToastyNotificationsFactory> this.notificationsFactory;
		
		let notification = toastyNotificationFactory.createNotification(title, message, nType);
		
		console.log('creating notification: ' + title);
		
		let toastyConfig = (<ToastyNotificationsConfig> this.notificationsConfigService.config).toToastyConfig();
		
		var toastOptions: ToastOptions = {
				title: title,
				msg: message,
				timeout: 0, // force timeout to be 0 as we want to control the removal
				showClose: toastyConfig.showClose,
				theme: toastyConfig.theme,
				onAdd: (toast: ToastData) => {
					this.toastAdded.next({
						notification: notification,
						toast: toast
					});
				}
		};
		
		console.log(toastOptions);
		console.log(notification);

		switch (nType) {
			case NotificationType.Info: 
				this.toastyService.info(toastOptions);
			break;
			case NotificationType.Success: 
				this.toastyService.success(toastOptions);
			break;
			case NotificationType.Wait: 
				this.toastyService.wait(toastOptions);
			break;
			case NotificationType.Error: 
				this.toastyService.error(toastOptions);
			break;
			case NotificationType.Warning: 
				this.toastyService.warning(toastOptions);
			break;
		}
		
		return notification;
	}
	
	onToastAddedToDom(toast: Element) {
		setTimeout(() => {
			toast.classList.add('showing');
		}, 100);	
	}
	
	onNotificationRemoved(notification: Notification) {
		let toastyNotification = <ToastyNotification> notification;
		let toastyNotificationsFactory = <ToastyNotificationsFactory> this.notificationsFactory;
		
		// TODO we have to figure out how and where it's appropriate to remove the notification, here or factory?
		
		// Fade out
		toastyNotification.element.classList.remove('showing');
		
		setTimeout(() => {
			this.toastyService.clear(toastyNotification.toast.id);
			
			// Remove from DOM
//			toastyNotification.element.remove();
			
			// Remove notification from factory list. Should wrap in method
//			toastyNotificationsFactory.notifications = toastyNotificationsFactory.notifications.filter(p => p.id !== notification.id)
			
			console.log(toastyNotification);
			console.log(toastyNotificationsFactory);
		}, 500);
	}
	
	ngOnDestroy() {
		this.subs.forEach(p => p.unsubscribe());
	}
}
