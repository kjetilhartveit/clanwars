import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent, HomeComponent, routing, appRoutingProviders }   from './';
import { UtilityService, ConfigService, PathsService, MainNavComponent }   from './shared';
import { FormHelperService, FieldIsRequiredComponent }   from './form';
import { WebHelperService }   from './web';
import { CountriesService, CountryToFlagPathPipe }   from './countries';
import { RacesService, RaceToIconPathPipe }   from './races';
import { ClansListComponent, ClanDetailsComponent, ClansService }   from './clans';
import { PlayersListComponent, PlayerDetailsComponent, PlayersService }   from './players';

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