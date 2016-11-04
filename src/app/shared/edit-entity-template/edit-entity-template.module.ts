import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEntityTemplateService } from './edit-entity-template.service';
import { EditEntityTemplateColumnComponent } from './edit-entity-template-column.component';
import { EditEntityTemplateListItemComponent } from './edit-entity-template-list-item.component';
import { EditEntityTemplateListComponent } from './edit-entity-template-list.component';
import { EditEntityTemplateDetailsComponent } from './edit-entity-template-details.component';
import { EditEntityTemplateComponent } from './edit-entity-template.component';

@NgModule({
  imports: [
        CommonModule
  ],
  declarations: [
		EditEntityTemplateComponent,
		EditEntityTemplateListComponent,
		EditEntityTemplateDetailsComponent,
		EditEntityTemplateColumnComponent,
		EditEntityTemplateListItemComponent
	],
	exports: [
		EditEntityTemplateComponent,
		EditEntityTemplateListComponent,
		EditEntityTemplateDetailsComponent,
		EditEntityTemplateColumnComponent,
		EditEntityTemplateListItemComponent
	],
	providers: [
		{ provide: EditEntityTemplateService, useClass: EditEntityTemplateService }
	]
})
export class EditEntityTemplateModule { }
