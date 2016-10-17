import { Component } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';

import { ConfigService } from './shared';

let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

//declare var __moduleName: string;

@Component({  
//	moduleId: __moduleName,
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'home',
	templateUrl: config.getAppPath() + '/home.component.html',
//	templateUrl: './home.component.html',
//	templateUrl: 'home.component.html',
//	styleUrls:  [config.getAppPath() + '/home.component.css'] 
})

export class HomeComponent {
}