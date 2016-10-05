import { Component, ViewEncapsulation } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';

import { ConfigService } from './shared';

let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

//declare var __moduleName: string;

@Component({  
//	moduleId: __moduleName,
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: config.getAppPath() + '/app.component.html',
	styleUrls:  [config.getAppPath() + '/app.component.min.css'], 
//	templateUrl: 'app.component.html',
//	styleUrls:  ['app.component.min.css'],
//	templateUrl: './app.component.html',
//	styleUrls:  ['./app.component.min.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppComponent {
	title = "Clan Wars";
}