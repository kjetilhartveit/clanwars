import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastyModule } from 'ng2-toasty';

import { NotificationsConfigServiceToken, NotificationsFactoryToken, NotificationsServiceToken } from './';
import { ToastyNotificationsConfigService } from './toasty-notifications-config.service';
import { ToastyNotificationsFactory } from './toasty-notifications.factory';
import { ToastyNotificationsService } from './toasty-notifications.service';
import { NotificationsComponent } from './notifications.component';

@NgModule({
  imports: [
        CommonModule,
		ToastyModule.forRoot()
  ],
  declarations: [
		NotificationsComponent
	],
	exports: [
		NotificationsComponent
	],
	providers: [
		{ provide: NotificationsFactoryToken, useClass: ToastyNotificationsFactory },
		{ provide: NotificationsConfigServiceToken, useClass: ToastyNotificationsConfigService },
		{ provide: NotificationsServiceToken, useClass: ToastyNotificationsService }
	]
})
export class NotificationsModule { }
