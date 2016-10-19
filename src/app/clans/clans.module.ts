import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RacesModule } from '../races/races.module';
import { CountriesModule } from '../countries/countries.module';
import { ClansService } from './clans.service';
import { ClansListComponent } from './clans-list.component';
import { ClanDetailsComponent } from './clan-details.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		FormsModule,
		SharedModule,
		RacesModule,
		CountriesModule
  ],
  declarations: [
		ClansListComponent,
		ClanDetailsComponent
	],
	exports: [
		ClansListComponent,
		ClanDetailsComponent
	],
	providers: [
		{ provide: ClansService, useClass: ClansService }
	]
})
export class ClansModule { }
