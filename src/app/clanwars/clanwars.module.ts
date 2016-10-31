import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ClansModule } from '../clans/clans.module';
import { PlayersModule } from '../players/players.module';
import { ClanwarsHandlerService } from './clanwars-handler.service';
import { ClanwarsService } from './clanwars.service';
import { ClanwarsListComponent } from './clanwars-list.component';
import { ClanwarDetailsComponent } from './clanwar-details.component';
import { MatchSideFormFieldComponent } from './match-side-form-field.component';
import { MatchFormFieldComponent } from './match-form-field.component';
import { MatchesFormFieldComponent } from './matches-form-field.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		SharedModule,
		ClansModule,
		PlayersModule
  ],
  declarations: [
		MatchSideFormFieldComponent,
		MatchFormFieldComponent,
		ClanwarsListComponent,
		ClanwarDetailsComponent,
		MatchesFormFieldComponent
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
