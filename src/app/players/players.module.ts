import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { RacesModule } from '../races/races.module';
import { CountriesModule } from '../countries/countries.module';
import { PlayersService } from './players.service';
import { PlayersListComponent } from './players-list.component';
import { PlayerDetailsComponent } from './player-details.component';

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
		PlayersListComponent,
		PlayerDetailsComponent
	],
	exports: [
		PlayersListComponent,
		PlayerDetailsComponent
	],
	providers: [
		{ provide: PlayersService, useClass: PlayersService }
	]
})
export class PlayersModule { }
