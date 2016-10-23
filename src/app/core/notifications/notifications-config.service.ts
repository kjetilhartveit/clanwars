import { Injectable } from '@angular/core';
import { NotificationsConfig } from './notifications-config';
import { ToastyNotificationsConfig } from './toasty-notifications-config';

@Injectable()
export class NotificationsConfigService {
	config: NotificationsConfig = new ToastyNotificationsConfig();
}
