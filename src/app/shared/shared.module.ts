import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEntityTemplateModule } from './edit-entity-template/edit-entity-template.module';
import { IdGeneratorService }	from './id-generator.service';
import { FormHelperService }	from './form/form-helper.service';
import { FieldIsRequiredComponent }	from './form/field-is-required.component';

@NgModule({
  imports: [
    CommonModule,
		EditEntityTemplateModule
  ],
  declarations: [
		FieldIsRequiredComponent
	],
	exports: [
		EditEntityTemplateModule,
		FieldIsRequiredComponent
	],
	providers: [
		{ provide: IdGeneratorService, useClass: IdGeneratorService },
		{ provide: FormHelperService, useClass: FormHelperService }
	]
})
export class SharedModule { }
