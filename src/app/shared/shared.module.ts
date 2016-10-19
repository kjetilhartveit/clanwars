import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHelperService }	from './form/form-helper.service';
import { FieldIsRequiredComponent }	from './form/field-is-required.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		FieldIsRequiredComponent
	],
	exports: [
		FieldIsRequiredComponent
	],
	providers: [
		{ provide: FormHelperService, useClass: FormHelperService }
	]
})
export class SharedModule { }
