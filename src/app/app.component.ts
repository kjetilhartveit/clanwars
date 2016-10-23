import { Component } from '@angular/core';

import { ToastyNotificationsConfig } from './core/notifications/toasty-notifications-config';
import { NotificationsConfigService } from './core/notifications/notifications-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = "Clan Wars";
	
	constructor(private notificationsConfigService: NotificationsConfigService) {
		let config = new ToastyNotificationsConfig();
		config.showClose = false;
		config.timeout = 5000;
		
		notificationsConfigService.config = config;
	}
}
