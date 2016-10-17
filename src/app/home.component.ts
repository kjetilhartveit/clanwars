import { Component } from '@angular/core';

import { globals } from './core';

@Component({  
	selector: globals.directiveSelector + 'home',
	templateUrl: './home.component.html'
})
export class HomeComponent {
}