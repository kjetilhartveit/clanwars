import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditEntityTemplateModule } from './edit-entity-template/edit-entity-template.module';
import { IdGeneratorService }	from './id-generator.service';
import { FormHelperService }	from './form/form-helper.service';
import { FieldIsRequiredComponent }	from './form/field-is-required.component';
import { SetInitialSelectedOptionDirective } from './set-initial-selected-option.directive';

@NgModule({
  imports: [
        CommonModule,
		ReactiveFormsModule,
		EditEntityTemplateModule
  ],
  declarations: [
		FieldIsRequiredComponent,
		SetInitialSelectedOptionDirective
	],
	exports: [
		CommonModule,
		ReactiveFormsModule,
		EditEntityTemplateModule,
		FieldIsRequiredComponent,
		SetInitialSelectedOptionDirective
	],
	providers: [
		{ provide: IdGeneratorService, useClass: IdGeneratorService },
		{ provide: FormHelperService, useClass: FormHelperService }
	]
})
export class SharedModule { }
