import { NgModule, OpaqueToken, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';

import { ConfigService }	from './config.service';
import { PathsService }	from './paths.service';
import { UtilityService }	from './utility.service';
import { WebHelperService }	from './web-helper.service';
import { NotificationsServiceToken } from './notifications/notifications.service';
import { ToastyNotificationsService } from './notifications/toasty-notifications.service';
import { NotificationsConfigService } from './notifications/notifications-config.service';
import { IdGeneratorService } from './notifications/id-generator.service';
import { MainNavComponent }	from './navigation/mainnav.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		ToastyModule.forRoot()
  ],
  declarations: [
		MainNavComponent,
		NotificationsComponent
	],
	exports: [
		MainNavComponent,
		NotificationsComponent
	],
	providers: [
		{ provide: UtilityService, useClass: UtilityService },
		{ provide: ConfigService, useClass: ConfigService },
		{ provide: PathsService, useClass: PathsService },
		{ provide: WebHelperService, useClass: WebHelperService },
		{ provide: NotificationsServiceToken, useClass: ToastyNotificationsService },
		{ provide: NotificationsConfigService, useClass: NotificationsConfigService },
		{ provide: IdGeneratorService, useClass: IdGeneratorService }
	]
})
export class CoreModule { 
	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				'CoreModule is already loaded. Import it in the AppModule only');
		}
	}
}
