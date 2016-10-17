import { Component } from '@angular/core';
import { ReflectiveInjector } from '@angular/core';

import { ConfigService } from '..';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

//declare var __moduleName: string;

@Component({  
//	moduleId: __moduleName,
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'mainnav',
//	templateUrl: './mainnav.component.html',
//	styleUrls:  ['./mainnav.component.min.css'] 
	templateUrl: config.getAppPath() + '/shared/mainnav/mainnav.component.html',
	styleUrls:  [config.getAppPath() + '/shared/mainnav/mainnav.component.min.css'] 
})

export class MainNavComponent {
}