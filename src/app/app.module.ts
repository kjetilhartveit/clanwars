import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { routing, appRoutingProviders }   from './app.routing';
import { UtilityService }   from './shared/utility.service';
import { ConfigService }   from './shared/config.service';
import { PathsService }   from './shared/paths.service';
import { MainNavComponent }   from './shared//mainnav/mainnav.component';
import { FormHelperService }   from './form/form-helper.service';
import { FieldIsRequiredComponent }   from './form/field-is-required.component';
import { WebHelperService }   from './web/web-helper.service';
import { CountriesService }   from './countries/countries.service';
import { CountryToFlagPathPipe }   from './countries/country-to-flag-path.pipe';
import { RacesService }   from './races/races.service';
import { RaceToIconPathPipe }   from './races/race-to-icon-path.pipe';
import { ClansService }   from './clans/clans.service';
import { ClansListComponent }   from './clans/clans-list.component';
import { ClanDetailsComponent }   from './clans/clan-details.component';
import { PlayersListComponent }   from './players/players-list.component';
import { PlayerDetailsComponent }   from './players/player-details.component';
import { PlayersService }   from './players/players.service';

@NgModule({
	imports:      [ 
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	declarations: [ 
		AppComponent, 
		MainNavComponent,
		FieldIsRequiredComponent,
		ClansListComponent,
		ClanDetailsComponent,
		PlayersListComponent,
		PlayerDetailsComponent,
		HomeComponent,
		CountryToFlagPathPipe,
		RaceToIconPathPipe
	],
  providers: [
    { provide: ConfigService, useClass: ConfigService },
    { provide: FormHelperService, useClass: FormHelperService },
    { provide: WebHelperService, useClass: WebHelperService },
    { provide: PathsService, useClass: PathsService },
    { provide: UtilityService, useClass: UtilityService },
    { provide: RacesService, useClass: RacesService },
    { provide: CountriesService, useClass: CountriesService },
    { provide: PlayersService, useClass: PlayersService },
    { provide: ClansService, useClass: ClansService },
		appRoutingProviders
  ],
	bootstrap:    [ 
		AppComponent 
	]
})
export class AppModule { }