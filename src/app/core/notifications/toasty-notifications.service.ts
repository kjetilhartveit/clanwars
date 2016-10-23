import { Inject, Injectable } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { ReplaySubject } from 'rxjs';

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
export class ToastyNotificationsService implements NotificationsService {
	toastAdded = new ReplaySubject<ToastAddedArguments>(); 

  constructor(private notificationsConfigService: NotificationsConfigService,
							private toastyService: ToastyService,
							@Inject(NotificationsFactoryToken) private notificationsFactory: NotificationsFactory) { 
	
		let toastyNotificationsFactory = <ToastyNotificationsFactory> this.notificationsFactory;
		
		this.toastAdded.subscribe(toastyNotificationsFactory.onToastAdded);						
	}
	
	addMessage(title: string, message: string, nType: NotificationType): Notification {
		let toastyNotificationFactory = <ToastyNotificationsFactory> this.notificationsFactory;
		
		let notification = toastyNotificationFactory.createNotification(title, message, nType);
		
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
}
