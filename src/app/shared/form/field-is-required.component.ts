import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { globals } from '../../core/globals';

@Component({
	selector: globals.directiveSelector + 'form-field-is-required',
	templateUrl: './field-is-required.component.html',
	styleUrls: ['./field-is-required.component.scss']
})
export class FieldIsRequiredComponent { 
	@Input() element: FormControl;
	@Input('fieldname') fieldName: string;
}