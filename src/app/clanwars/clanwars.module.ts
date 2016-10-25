import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClansModule } from '../clans/clans.module';
import { PlayersModule } from '../players/players.module';
import { ClanwarsHandlerService } from './clanwars-handler.service';
import { ClanwarsService } from './clanwars.service';
import { ClanwarsListComponent } from './clanwars-list.component';
import { ClanwarDetailsComponent } from './clanwar-details.component';

@NgModule({
  imports: [
    CommonModule,
		ClansModule,
		PlayersModule
  ],
  declarations: [
		ClanwarsListComponent,
		ClanwarDetailsComponent
	],
	exports: [
		ClanwarsListComponent,
		ClanwarDetailsComponent
	],
	providers: [
		{ provide: ClanwarsService, useClass: ClanwarsService },
		{ provide: ClanwarsHandlerService, useClass: ClanwarsHandlerService }
	]
})
export class ClanwarsModule { }
