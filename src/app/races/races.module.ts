import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaceToIconPathPipe }	from './race-to-icon-path.pipe';
import { RacesService }	from './races.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		RaceToIconPathPipe
	],
	exports: [
		RaceToIconPathPipe
	],
	providers: [
		{ provide: RacesService, useClass: RacesService }
	]
})
export class RacesModule { }
