import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EditEntityTemplateModule } from './edit-entity-template/edit-entity-template.module';
import { DraggableDirective } from './drag-drop/draggable.directive';
import { DroppableDirective } from './drag-drop/droppable.directive';
import { IdGeneratorService } from './id-generator.service';
import { FormHelperService } from './form/form-helper.service';
import { FieldIsRequiredComponent }	from './form/field-is-required.component';
import { SetInitialSelectedOptionDirective } from './set-initial-selected-option.directive';

const importsExports = [
    CommonModule,
    ReactiveFormsModule,
    EditEntityTemplateModule
];

const declareExports = [
    DraggableDirective,
    DroppableDirective,
    FieldIsRequiredComponent,
    SetInitialSelectedOptionDirective
];

@NgModule({
    imports: [
        ...importsExports
    ],
    declarations: [
        ...declareExports
    ],
    exports: [
        ...importsExports,
        ...declareExports
	],
	providers: [
		{ provide: IdGeneratorService, useClass: IdGeneratorService },
		{ provide: FormHelperService, useClass: FormHelperService }
	]
})
export class SharedModule { }
