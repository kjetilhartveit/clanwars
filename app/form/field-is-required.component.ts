import { Component, Input, ReflectiveInjector } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ConfigService } from '../shared';

// TODO Can we prettify this?
let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
let config: ConfigService = injector.get(ConfigService);

@Component({
	moduleId: module.id,
	selector: config.getDirectiveSelectorPrefix() + 'form-field-is-required',
	templateUrl: config.getAppPath() + '/forms/field-is-required.component.html',
	styleUrls: [config.getAppPath() + '/forms/field-is-required.component.min.css']
})

export class FieldIsRequiredComponent { 
	@Input()
	element: FormControl;

	@Input('fieldname')
	fieldName: string;
}