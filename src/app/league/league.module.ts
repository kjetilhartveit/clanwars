import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClanwarsModule } from '../clanwars/clanwars.module';
import { LeagueComponent } from './league.component';

@NgModule({
  imports: [
    CommonModule,
		ClanwarsModule
  ],
  declarations: [
		LeagueComponent
	],
	exports: [
		LeagueComponent
	],
	providers: [
	]
})
export class LeagueModule { }
