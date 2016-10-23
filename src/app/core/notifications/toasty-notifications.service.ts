import { Injectable, } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';

import { Notification, NotificationType } from './notification';
import { ToastyNotification } from './toasty-notification';
import { ToastyNotificationsConfig } from './toasty-notifications-config';
import { IdGeneratorService } from './id-generator.service';
import { NotificationsService } from './notifications.service';
import { NotificationsConfigService } from './notifications-config.service';

@Injectable()
export class ToastyNotificationsService implements NotificationsService {

  constructor(private notificationsConfigService: NotificationsConfigService,
							private toastyService: ToastyService,
							private idGeneratorService: IdGeneratorService) { }
	
	addMessage(title: string, message: string, nType: NotificationType): Notification {
		let notification = new ToastyNotification(title, message, nType, this.idGeneratorService);
		
		let toastyConfig = (<ToastyNotificationsConfig> this.notificationsConfigService.config).toToastyConfig();
		
		var toastOptions: ToastOptions = {
				title: title,
				msg: message,
				timeout: toastyConfig.timeout,
				showClose: toastyConfig.showClose,
				theme: toastyConfig.theme,
				onAdd: (toast: ToastData) => {
					notification.toast = toast;
//						console.log('Toast ' + toast.id + ' has been added!');
				},
				onRemove: function(toast: ToastData) {
//						console.log('Toast ' + toast.id + ' has been removed!');
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
}
