import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ConfigService } from './config.service';
import { PathsService }	from './paths.service';
import { WebHelperService }	from './web-helper.service';
import { NotificationsModule } from './notifications/notifications.module';
import { MainNavComponent }	from './navigation/mainnav.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NotificationsModule
    ],
    declarations: [
        MainNavComponent
    ],
    exports: [
        NotificationsModule,
        MainNavComponent
    ],
    providers: [
        { provide: ConfigService, useClass: ConfigService },
        { provide: PathsService, useClass: PathsService },
        { provide: WebHelperService, useClass: WebHelperService }
    ]
})
export class CoreModule { 
	constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only'
            );
		}
	}
}
