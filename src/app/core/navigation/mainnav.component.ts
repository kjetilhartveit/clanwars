import { Component } from '@angular/core';

import { globals } from '../';

@Component({  
	selector: globals.directiveSelector + 'mainnav',
	templateUrl: './mainnav.component.html',
	styleUrls:  ['./mainnav.component.scss'] 
})
export class MainNavComponent {
}