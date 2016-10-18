import { Component } from '@angular/core';

import { globals } from './core/globals';

@Component({  
	selector: globals.directiveSelector + 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
}