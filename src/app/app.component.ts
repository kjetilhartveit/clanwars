import { Inject, Component } from '@angular/core';

import { ToastyNotificationsConfig } from './core/notifications/toasty-notifications-config';
import { NotificationsConfigService } from './core/notifications/notifications-config.service';
import { NotificationsConfigServiceToken } from './core/notifications/notifications-config.service.token';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = "Clan Wars";
	
	constructor( @Inject(NotificationsConfigServiceToken) private notificationsConfigService: NotificationsConfigService) {
		let config = new ToastyNotificationsConfig();
		config.showClose = false;
		config.timeout = 5000;
		
		this.notificationsConfigService.config = config;
	}
}
