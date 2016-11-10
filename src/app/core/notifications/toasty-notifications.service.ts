import { Inject, Injectable, OnDestroy } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from 'ng2-toasty';
import { Subscription, ReplaySubject } from 'rxjs';

import { SubscriptionsManager, HasSubscriptions } from '../../core/';
import {
    Notification, NotificationType, ToastyNotification, ToastyNotificationsConfig,
    NotificationsConfigServiceToken, NotificationsFactoryToken
} from './';
import { NotificationsConfigService } from './notifications-config.service';
import { NotificationsService } from './notifications.service';
import { NotificationsFactory } from './notifications.factory';
import { ToastyNotificationsFactory } from './toasty-notifications.factory';

@Injectable()
export class ToastyNotificationsService implements HasSubscriptions, NotificationsService {
	readonly notificationHasToast = new ReplaySubject<Notification>();
	readonly notificationHasDomElement = new ReplaySubject<Notification>();
    readonly removeNotification = new ReplaySubject<Notification>();
    notifications: Notification[] = []; // array of current notifications
    toastsContainer: { toasts: ToastData[]; } // container of toasts
    subs = new SubscriptionsManager(); 
	
    constructor(@Inject(NotificationsConfigServiceToken) private notificationsConfigService: NotificationsConfigService,
                private toastyService: ToastyService,
                @Inject(NotificationsFactoryToken) private notificationsFactory: NotificationsFactory) {
         
		let toastyNotificationsFactory = <ToastyNotificationsFactory>this.notificationsFactory;		
		
		this.subs.add(
			toastyNotificationsFactory.notificationCreated.subscribe((notification) => { 
				this.onNotificationCreated(notification) 
			}),
            this.notificationHasDomElement.subscribe((notification) => {
                this.onNotificationHasDomElement(notification)
            }),
            this.removeNotification.subscribe((notification) => {
                this.onRemoveNotification(notification)
            })
		);
    }

    /**
     * Displays a notification
     */
	addMessage(title: string, message: string, nType: NotificationType): Notification {
		let toastyNotificationFactory = <ToastyNotificationsFactory>this.notificationsFactory;
		
		let notification = toastyNotificationFactory.createNotification(title, message, nType);
		
		let toastyConfig = (<ToastyNotificationsConfig>this.notificationsConfigService.config).toToastyConfig();
		
		var toastOptions: ToastOptions = {
				title: title,
				msg: message,
				timeout: 0, // force timeout to be 0 as we want to control the removal
				showClose: toastyConfig.showClose,
				theme: toastyConfig.theme,
				onAdd: (toast: ToastData) => {
					(<ToastyNotification>notification).toast = toast;

                    // Emit our toast data for newly added notification
					this.notificationHasToast.next(notification);
				}
		};

        // Show toasty notification
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

    /**
     * On toast added to DOM
     */
    attachElementToNotification(element: Element) {
        // Get earliest notification without a DOM element
        let notification = this.getEarliestNotificationWithoutDomElement();

        if (notification) {
            let toastyNotification = <ToastyNotification>notification;

            if (toastyNotification) {
                // Associate notification with toast DOM element
                toastyNotification.element = element;

                this.notificationHasDomElement.next(toastyNotification);
            }
        }
    }

    /**
     * On notification created
     */
	private onNotificationCreated(notification: Notification) {
		this.notifications.push(notification);
	}

    /**
     * On notification has DOM element
     */
	private onNotificationHasDomElement(notification: Notification) {
		let toastyNotification = <ToastyNotification>notification;
		
		// Show the notification
        setTimeout(() => {
            // Add class to fade in element
			toastyNotification.element.classList.add('showing');
		}, 100);	
		
		// TODO when hover over the notification the timeout should be set to 0, restart timer onblur
        setTimeout(() => {
            // Emit event to remove notification
			this.removeNotification.next(notification);
		}, this.notificationsConfigService.config.timeout); 
	}

    /**
     * On remove notification
     */
	private onRemoveNotification(notification: Notification) {
		let toastyNotification = <ToastyNotification>notification;
		
		// Remove class to fade out element
		toastyNotification.element.classList.remove('showing');
		
        setTimeout(() => {
            // Remove toasty 
            this.removeToasty(toastyNotification.toast.id);

			// Can't use the official way as there's a bug in code. clear(id: number) clears all toasts
            // this.toastyService.clear(toastyNotification.toast.id);
		}, 600); // hardcoding fadeout time
	}

    /**
     * Get earliest notification without DOM element
     */
	private getEarliestNotificationWithoutDomElement(): Notification {
		let domlessNotification: Notification;
		
		this.notifications.forEach(notification => {
			let toastyNotification = <ToastyNotification>notification;
			
			if (toastyNotification && !toastyNotification.element) {
				domlessNotification = notification; 
				
				return notification;
			}
		})
		
		return domlessNotification;
	}

    /**
     * Removes Toasty
     *
     * Code contents from Toasty2 source on Github
     */
    private removeToasty(id: number) {
		if (this.toastsContainer.toasts) {
			this.toastsContainer.toasts.forEach((toast: ToastData, index: number) => {
				if (toast.id === id) {
					if (toast.onRemove &&	typeof toast.onRemove === "function") {
						toast.onRemove.call(this, toast);
					}

					this.toastsContainer.toasts.splice(index, 1);
				}
			}); 
		}
	}
}
