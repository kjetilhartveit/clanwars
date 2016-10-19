import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClansModule } from '../clans/clans.module';
import { PlayersModule } from '../players/players.module';
import { ClanwarHandlerService } from './clanwar/clanwar-handler.service';
import { ClanwarsService } from './clanwar/clanwars.service';
import { LeagueComponent } from './league.component';
import { ClanwarComponent } from './clanwar/clanwar.component';

@NgModule({
  imports: [
    CommonModule,
		ClansModule,
		PlayersModule
  ],
  declarations: [
		LeagueComponent,
		ClanwarComponent
	],
	exports: [
		LeagueComponent,
		ClanwarComponent
	],
	providers: [
		{ provide: ClanwarsService, useClass: ClanwarsService },
		{ provide: ClanwarHandlerService, useClass: ClanwarHandlerService }
	]
})
export class LeagueModule { }
