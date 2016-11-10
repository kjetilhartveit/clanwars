import { Injectable } from '@angular/core';
import { NotificationsConfig } from './';
import { NotificationsConfigService } from './notifications-config.service';
import { ToastyNotificationsConfig } from './toasty-notifications-config';

@Injectable()
export class ToastyNotificationsConfigService implements NotificationsConfigService {
	config: NotificationsConfig = new ToastyNotificationsConfig();
}
