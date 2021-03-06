import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RacesModule } from '../races/races.module';
import { CountriesModule } from '../countries/countries.module';
import { ClansService } from './clans.service';
import { ClansListComponent } from './clans-list.component';
import { ClanDetailsComponent } from './clan-details.component';

@NgModule({
  imports: [
		RouterModule,
		SharedModule,
		RacesModule,
		CountriesModule
  ],
  declarations: [
		ClansListComponent,
		ClanDetailsComponent
	],
	exports: [
		ClansListComponent
	],
	providers: [
		{ provide: ClansService, useClass: ClansService }
	]
})
export class ClansModule { }
