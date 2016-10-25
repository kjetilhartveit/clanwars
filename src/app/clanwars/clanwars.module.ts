import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ClansModule } from '../clans/clans.module';
import { PlayersModule } from '../players/players.module';
import { ClanwarsHandlerService } from './clanwars-handler.service';
import { ClanwarsService } from './clanwars.service';
import { ClanwarsListComponent } from './clanwars-list.component';
import { ClanwarDetailsComponent } from './clanwar-details.component';
import { MatchSideAsFormFieldsComponent } from './match-side-as-form-fields.component';
import { MatchAsFormFieldsComponent } from './match-as-form-fields.component';

@NgModule({
  imports: [
    CommonModule,
		RouterModule,
		FormsModule,
		SharedModule,
		ClansModule,
		PlayersModule
  ],
  declarations: [
		MatchSideAsFormFieldsComponent,
		MatchAsFormFieldsComponent,
		ClanwarsListComponent,
		ClanwarDetailsComponent
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
