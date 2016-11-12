import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CountriesModule } from '../countries/countries.module';
import { ClansModule } from '../clans/clans.module';
import { PlayersModule } from '../players/players.module';
import { ClanwarsHandlerService } from './clanwars-handler.service';
import { ClanwarsService } from './clanwars.service';
import { ClanwarsListComponent } from './clanwars-list.component';
import { ClanwarDetailsComponent } from './clanwar-details.component';
import { MatchSideControlsComponent } from './match-side-controls.component';

@NgModule({
  imports: [
		RouterModule,
        SharedModule,
        CountriesModule,
		ClansModule,
		PlayersModule
  ],
  declarations: [
		ClanwarsListComponent,
		ClanwarDetailsComponent,
		MatchSideControlsComponent
	],
	exports: [
		ClanwarsListComponent
	],
	providers: [
		{ provide: ClanwarsService, useClass: ClanwarsService },
		{ provide: ClanwarsHandlerService, useClass: ClanwarsHandlerService }
	]
})
export class ClanwarsModule { }
