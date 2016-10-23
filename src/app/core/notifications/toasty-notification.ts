import { ElementRef } from '@angular/core';
import { ToastData } from 'ng2-toasty';

import { Notification, NotificationType } from './notification';

export class ToastyNotification implements Notification {
	id: number;
	title: string;
	message: string;
	notificationType: NotificationType; 
	toast: ToastData;
	elementRef: ElementRef;
	
	constructor(id: number, title: string, message: string, notificationType: NotificationType) {
		this.id = id;
		this.title = title;
		this.message = message;
		this.notificationType = notificationType;
	}
}