import { ElementRef } from '@angular/core';
import { ToastData } from 'ng2-toasty';

import { Notification, NotificationType } from './notification';
import { IdGeneratorService } from './id-generator.service';

export class ToastyNotification implements Notification {
	id: number;
	title: string;
	message: string;
	notificationType: NotificationType; 
	idGeneratorService: IdGeneratorService;
	toast: ToastData;
	elementRef: ElementRef;
	
	constructor(title: string,
							message: string, 
							notificationType: NotificationType, 
							idGeneratorService: IdGeneratorService) {
							
		this.id = idGeneratorService.next();
		this.title = title;
		this.message = message;
		this.notificationType = notificationType;
		this.idGeneratorService = idGeneratorService;
	}
}